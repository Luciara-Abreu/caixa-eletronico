##  API SIMPLES DE CAIXA ELETRONICO ------------------------------------------------------------------------------------------------

== instalando o projeto:
Crie um novo projeto backend com o Express Generator:
npm install -g express-generator
express --no-view meu-projeto-backend

== Explorando a estrutura do projeto:
app.js: Arquivo principal que configura e inicia o aplicativo Express.
routes/: Pasta que contém os arquivos de rota. Pode começar a adicionar suas próprias rotas aqui.
public/: Pasta para arquivos estáticos, como JavaScript, imagens e folhas de estilo.
views/: Pasta para os arquivos de visualização, mas como você usou a opção --no-view, isso não foi gerado.

## ------------------------------------------------------------------------------------------------


## COMO INSTALAR O DOCKER NO MINT 
https://pauloribeiro.dev/instalar-docker-linux-mint-21#comment-13


## Com o dockerfile já criado, rodar dentro da pasta do projeto para criar o container com a imagem do mongo
--> sudo docker run -d -p 27017:27017 --name caixa_eletronico -it mongo