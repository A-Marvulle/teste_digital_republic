import './form.css';
import { validarParedes, validarAreas, janelaValida, portaValida } from './formularioValidation';
import React, { useState } from 'react';
import calcularTinta from './calcularTinta';

function Formulario() {
  const [erro, setErro] = useState('');
  const [latasSugeridas, setLatasSugeridas] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const camposObrigatorios = 
      ['altura1', 'largura1', 'janela1', 'porta1', 
      'altura2', 'largura2', 'janela2', 'porta2', 
      'altura3', 'largura3', 'janela3', 'porta3', 
      'altura4', 'largura4', 'janela4', 'porta4'];
    const camposVazios = camposObrigatorios.filter(campo => !event.target[campo].value.trim());
    if (camposVazios.length > 0) {
      setErro('Campos Obrigatórios Não Preenchidos');
      setLatasSugeridas([])
      return;
    }

    const paredes = [
      { altura: parseFloat(event.target.altura1.value), largura: parseFloat(event.target.largura1.value), janela: parseInt(event.target.janela1.value), porta: parseInt(event.target.porta1.value) },
      { altura: parseFloat(event.target.altura2.value), largura: parseFloat(event.target.largura2.value), janela: parseInt(event.target.janela2.value), porta: parseInt(event.target.porta2.value) },
      { altura: parseFloat(event.target.altura3.value), largura: parseFloat(event.target.largura3.value), janela: parseInt(event.target.janela3.value), porta: parseInt(event.target.porta3.value) },
      { altura: parseFloat(event.target.altura4.value), largura: parseFloat(event.target.largura4.value), janela: parseInt(event.target.janela4.value), porta: parseInt(event.target.porta4.value) }
    ];

    const paredeErrors = await validarParedes(paredes);
    if (paredeErrors !== true) {
      setLatasSugeridas([])
      setErro('Erro nas paredes: ' + paredeErrors.join(', '));
      return;
    }
    const areaValida = validarAreas(paredes);
    if (!areaValida) {
      setLatasSugeridas([])
      setErro('Erro na área das janelas e portas.');
      return;
    }
    const validaPorta = portaValida(paredes);
    if (!validaPorta) {
      setLatasSugeridas([])
      setErro('Erro na paredes com porta.');
      return;
    }
    const validaJanela = janelaValida(paredes);
    if (!validaJanela) {
      setLatasSugeridas([])
      setErro('Erro nas paredes com janela.');
      return;
    }

    const areaTotal = calcularAreaTotal(event.target);
    const latasSugeridas = calcularTinta(areaTotal);
    console.log('Latas sugeridas:', latasSugeridas);
    setLatasSugeridas(latasSugeridas);
    setErro('');
  };

  const calcularAreaTotal = (form) => {
    let areaTotal = 0;
    for (let i = 1; i <= 4; i++) {
      const altura = parseFloat(form[`altura${i}`].value);
      const largura = parseFloat(form[`largura${i}`].value);
      areaTotal += altura * largura;
    }
    return areaTotal;
  };

  return (
    <div className="Formulario">
      <form onSubmit={handleSubmit}>
        <div className='parede-container'>
          <section className='parede'>
            <h3>Parede 1</h3>
            <label>
              Altura: <input type="text" name="altura1" />
            </label>
            <label>
              Largura: <input type="text" name="largura1" />
            </label>
            <label>
              Janelas: <input type="text" name="janela1" />
            </label>
            <label>
              Portas: <input type="text" name="porta1" />
            </label>
          </section>

          <section className='parede'>
            <h3>Parede 2</h3>
            <label>
              Altura: <input type="text" name="altura2" />
            </label>
            <label>
              Largura: <input type="text" name="largura2" />
            </label>
            <label>
              Janelas: <input type="text" name="janela2" />
            </label>
            <label>
              Portas: <input type="text" name="porta2" />
            </label>
          </section>

          <section className='parede'>
            <h3>Parede 3</h3>
            <label>
              Altura: <input type="text" name="altura3" />
            </label>
            <label>
              Largura: <input type="text" name="largura3" />
            </label>
            <label>
              Janelas: <input type="text" name="janela3" />
            </label>
            <label>
              Portas: <input type="text" name="porta3" />
            </label>
          </section>

          <section className='parede'>
            <h3>Parede 4</h3>
            <label>
              Altura: <input type="text" name="altura4" />
            </label>
            <label>
              Largura: <input type="text" name="largura4" />
            </label>
            <label>
              Janelas: <input type="text" name="janela4" />
            </label>
            <label>
              Portas: <input type="text" name="porta4" />
            </label>
          </section>
        </div>        
        <input type="submit" value="Calcular" />

      </form>
      <section className='erro'>
        <p>{erro}</p>
      </section>
      <section className='tinta'>
        <ul>
          {latasSugeridas.map((lata, index) => (
            <li key={index}>Lata de {lata.tamanho}L: {lata.quantidade} unidade(s)</li>
          ))}
        </ul>
      </section>
      
      
    </div>
  );
}

export default Formulario;