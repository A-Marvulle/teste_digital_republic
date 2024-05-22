# Code Challenge 

### Objetivo

O Objetivo desse desafio é avaliar o conhecimento e capacidade dos candidatos às vagas de programação/desenvolvimento.
O teste pode ser feito por qualquer nível de profissional, contudo o critério de avaliação será conforme a experiencia do candidato.


### Regras de negócio

1. Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros quadrados, mas podem possuir alturas e larguras diferentes
2. O total de área das portas e janelas deve ser no máximo 50% da área de parede
3. A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
4. Cada janela possui as medidas: 2,00 x 1,20 mtos
5. Cada porta possui as medidas: 0,80 x 1,90
6. Cada litro de tinta é capaz de pintar 5 metros quadrados
7. Não considerar teto nem piso.
8. As variações de tamanho das latas de tinta são:
   - 0,5 L
   - 2,5 L
   - 3,6 L
   - 18 L

# Instalação

Pré - Requisitos

- Deve ter Visual Studio Code [instalado](https://code.visualstudio.com/download);
- Deve ter Git [instalado](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git) e configurado;
- Deve ter WinRAR ou similar [instalado](https://www.win-rar.com/start.html?&L=9).


## Download

Abrá o link [aqui](https://gitlab.com/A-Marvulle/digital-republic) e clique em _Code_ e em _Download source code_, clique em *zip*.

Va no local salvo (costuma ser downloads), e clique com o botão direito, procure *WinRAR* e em *Extrair para "digital-republic-main\"*


## Clone

Abrindo o VS Code, clique em Ctrl + Shift + N para abrir uma nova janela.

Após isso, clique no Ctrl + Shift + ' para abrir o terminal

Digite cd <local_da_pasta> Meu exemplo: 

```
cd "C:\Users\alfre\Desktop\Coisinhas\Nova pasta"
```


Após isso cole o comando

```
git clone https://gitlab.com/A-Marvulle/digital-republic.git
```

## Rodar
Agora clique em _File_, Depois em _Open Folder_ e selecione a pasta do projeto.


Caso apaereça uma mensagem de aviso, clique em _Yes, I Trust the authors_

Digite o comando cd <caminho_da_pasta>
Exemplo clone:

```
cd "C:\Users\alfre\Desktop\Coisinhas\novaPasta\digital-republic"
```

Exemplo zip:

```
cd "C:\Users\alfre\Desktop\Coisinhas\digital-republic-main\digital-republic-main"
```

Digite o comando abaixo e espere instalar as dependencias

```
npm install
```

Após a instalação, digite o comando abaixo para abir a aplicação.

```
npm start
```

Deverá abrir no site *localhost:3000*

## Visualização

Clique no [Link](https://a-marvulle.github.io/teste_digital_republic/) para visualizar a aplicação no Github Pages