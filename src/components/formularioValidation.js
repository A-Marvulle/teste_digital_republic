import * as yup from 'yup';

const janelaAltura = 1.20;
const janelaLargura = 2;
const janelaArea = janelaAltura * janelaLargura; 
const portaAltura = 1.90;
const portaLargura = 0.80;
const portaArea = portaLargura * portaAltura;

const paredeSchema = yup.object().shape({
  altura: yup
    .number()
    .required('Altura é obrigatória')
    .min(0.01, 'Altura deve ser positiva'),
  largura: yup
    .number()
    .required('Largura é obrigatória')
    .min(0.01, 'Largura deve ser positiva'),
  janela: yup
    .number()
    .required('Número de janelas é obrigatório')
    .min(0, 'Número de janelas deve ser positivo')
    .integer('Número de janelas deve ser um número inteiro'),
  porta: yup
    .number()
    .required('Número de portas é obrigatório')
    .min(0, 'Número de portas deve ser positivo')
    .integer('Número de portas deve ser um número inteiro')
});

export const validarParedes = async (paredes) => {
    try {
      await Promise.all(paredes.map(parede => paredeSchema.validate(parede, { abortEarly: false })));
  
      for (const parede of paredes) {
        const areaParede = parede.altura * parede.largura;
        if (areaParede < 1 || areaParede > 50) {
          throw new Error(`Existe uma área fora dos limites permitidos (1-50 m2).`);
        }
      }
      
      return true;
    } catch (errors) {
      if (errors.inner) {
        return errors.inner.map(error => error.message);
      } else {
        return [errors.message];
      }
    }
  };
  
  export const validarAreas = (paredes) => {
    return paredes.every(parede => {
      const areaParede = parede.altura * parede.largura;
      const areaJanelas = parede.janela * janelaArea;
      const areaPortas = parede.porta * portaArea;
      return (areaJanelas + areaPortas) <= 0.5 * areaParede;
    });
  };
  
  export const portaValida = (paredes) => {
    return paredes.every(parede => {
      if (parede.porta > 0) {
        return (parede.altura >= portaAltura + 0.30 && parede.largura >= portaLargura);
      }
      return true;
    });
  };
  
  export const janelaValida = (paredes) => {
    return paredes.every(parede => {
      if (parede.janela > 0) {
        return (parede.altura >= janelaAltura && parede.largura >= janelaLargura);
      }
      return true;
    });
  };
