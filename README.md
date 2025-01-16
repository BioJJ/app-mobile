# App Mobile

## Visão Geral

O desafio consiste na criação de um aplicativo simples que lista marcas de carro e permite acessar os modelos de uma marca específica. O aplicativo deve seguir os padrões de desenvolvimento que a empresa utiliza e será uma referência para projetos futuros.

## Funcionalidades do Aplicativo

O aplicativo deve conter as seguintes telas:

1. **SignIn (Login)**
   - Tela para que o usuário faça login para acessar outras partes da aplicação.

2. **Home**
   - Listagem das marcas de carros.
   - Exibição do nome do usuário (obtido do Context API).
   - Botão para sair do aplicativo.

3. **Model**
   - Listagem dos modelos de carros ao clicar em uma marca específica.

## Recursos Obrigatórios

O desenvolvimento do aplicativo deve incorporar os seguintes elementos:

- **Tecnologias e Bibliotecas:**
  - **Expo**: Para facilitar o desenvolvimento e execução do aplicativo.
  - **TypeScript**: Para uma melhor tipagem e desenvolvimento.
  - **Context API**: Para gerenciar os dados de login do usuário.
  - **Async Storage**: Para armazenar os dados de login.
  - **NativeWind** ou **Styled Components**: Para a estilização do aplicativo.
  - **React Navigation**: Para o gerenciamento da navegação dentro do aplicativo (livre escolha do tipo de navegação).
  - **Fetch API** ou **Axios**: Para fazer consultas às APIs.

- **Adicional:**
  - Use **React Hook Form** para gerenciar os inputs de login (isso é uma vantagem, mas não obrigatório).
  - Adicione bibliotecas que você considerar necessárias para melhorar a experiência do usuário.

## Fluxo do Aplicativo

1. O usuário faz login e é redirecionado para a tela **Home**, que lista todas as marcas de carros disponíveis.
2. Na tela **Home**, o usuário pode ver seu nome (puxado do Context API) e um botão para sair do aplicativo.
3. Ao clicar em uma marca, o usuário é levado para a tela **Model**, onde pode ver todos os modelos daquela marca.

## Recursos de API

### 1. Método para Fazer Login
- **URL:** `https://test-api-y04b.onrender.com/signIn`
- **Método:** `POST`
- **Parâmetros requeridos no Body:**
  - **user:** `teste`
  - **password:** `123`

#### Respostas
- **Sucesso:** Salvar os dados retornados do usuário no Async Storage e no Context. Redirecionar para a tela Home.
- **Erro:** Mostrar a mensagem de erro retornada pela API.

### 2. Método para Listar as Marcas
- **URL:** `https://parallelum.com.br/fipe/api/v1/carros/marcas`
- **Método:** `GET`
- **Retorno:** Código e nome das marcas.

### 3. Método para Listar os Modelos da Marca Escolhida
- **URL:** `https://parallelum.com.br/fipe/api/v1/carros/marcas/{código da marca}/modelos`
  - Exemplo: `https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos`
- **Método:** `GET`
- **Retorno:** Código e nome dos modelos.

## Recomendações

- Escreva o código em inglês para facilitar compreensão e colaboração futura.

## Avaliação

A avaliação do desafio será baseada em:

- Estrutura, organização e componentização do código.
- Boas práticas de programação.


---

