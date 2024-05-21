const TAMANHOS_LATAS = [
  { tamanho: 18, capacidade: 18 },
  { tamanho: 3.6, capacidade: 3.6 },
  { tamanho: 2.5, capacidade: 2.5 },
  { tamanho: 0.5, capacidade: 0.5 }
];

const METROS_POR_LITRO = 5;

function calcularTinta(areaParedes) {
  let litrosNecessarios = areaParedes / METROS_POR_LITRO;
  const latasSugeridas = [];

  for (const lata of TAMANHOS_LATAS) {
    const numLatas = Math.floor(litrosNecessarios / lata.capacidade);
    if (numLatas > 0) {
      latasSugeridas.push({ tamanho: lata.tamanho, quantidade: numLatas });
      litrosNecessarios -= numLatas * lata.capacidade;
    }
  }

  // Se ainda houver necessidade de tinta, adicionar a lata menor possível
  if (litrosNecessarios > 0) {
    const lataExistente = latasSugeridas.find(l => l.tamanho === 0.5);
    if (lataExistente) {
      lataExistente.quantidade += 1;
    } else {
      latasSugeridas.push({ tamanho: 0.5, quantidade: 1 });
    }
  }

  return latasSugeridas;
}

export default calcularTinta;
