# API REST de Caixa Eletrônico em Node.js com TypeScript
----------------------------------------------------------------

Esta é uma API REST desenvolvida em Node.js com TypeScript para simular funcionalidades de um caixa eletrônico, como depositar dinheiro, sacar dinheiro e verificar o saldo da conta.

# Tecnologias Utilizadas
Node.js: Plataforma de execução de código JavaScript do lado do servidor.
Express.js: Framework web para Node.js que facilita a criação de aplicativos da web e APIs.
TypeScript: Superset do JavaScript que adiciona tipagem estática e outros recursos ao JavaScript.
Docker: Plataforma de contêineres que facilita a criação, implantação e execução de aplicativos usando contêineres.
MongoDB: Banco de dados NoSQL usado para armazenar os dados da aplicação.
Mongoose: Biblioteca do Node.js que fornece uma solução baseada em esquema para modelar os dados da aplicação.

# Principais Funcionalidades

## Depositar
Permite que o usuário deposite dinheiro em sua conta bancária. O valor do depósito é adicionado ao saldo existente na conta.

## Sacar
Permite que o usuário retire dinheiro de sua conta bancária. Antes de permitir o saque, a API verifica se há saldo suficiente na conta. Se houver saldo disponível, o valor do saque é deduzido do saldo existente na conta.

## Verificar Saldo
Permite que o usuário consulte o saldo atual de sua conta bancária.

# Explorando a Estrutura do Projeto

public/: Pasta para arquivos estáticos, como JavaScript, imagens e folhas de estilo.
interfaces/: Define as interfaces TypeScript utilizadas no projeto.
models/: Contém os modelos de dados MongoDB definidos usando Mongoose.
repositories/: Implementa as operações de acesso aos dados no banco de dados.
services/: Contém a lógica de negócios da aplicação, como serviços para depositar, sacar e verificar saldo.
routes/: Pasta que contém os arquivos de rota. Aqui são definidas as rotas da API.
app.js: Arquivo principal que configura e inicia o aplicativo Express. Aqui você pode definir ## middlewares, configurar rotas e inicializar o servidor HTTP.

# Executando o Projeto
## Para executar o projeto localmente, siga estas etapas:

Clone o repositório do GitHub.
Certifique-se de ter o Docker instalado em sua máquina.
Navegue até o diretório raiz do projeto no terminal.
Execute docker-compose up -d para iniciar o contêiner do MongoDB em segundo plano.
Execute npm install para instalar as dependências do projeto.
Execute npm start para iniciar o servidor.
Acesse a API em http://localhost:3000.
Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir um PR ou relatar problemas.


## ------------------------------------------------------------------------------------------------


## COMO INSTALAR O DOCKER NO MINT 
https://pauloribeiro.dev/instalar-docker-linux-mint-21#comment-13


## Com o dockerfile já criado, rodar dentro da pasta do projeto para criar o container com a imagem do mongo
--> sudo docker run -d -p 27017:27017 --name caixa_eletronico -it mongo