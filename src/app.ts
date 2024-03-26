import * as dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import { connection } from './config/db'
import routes from './routers';

const app = express();
app.use(cors());
app.use(express.json());

//chamar as rotas
app.use(routes)

const port = process.env.PORT_SERVER;

connection.then(() => {
  console.log('✨ 🏆 Connection port==> http://localhost:3000/ 🏆  ✨');
  app.listen(port, () => {
    console.log(`✨ 🏆 Server started on port    `, port, `          🏆  ✨`);
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨');
    console.log('')
  });
}).catch((error: any) => {
  console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨');
  console.log('')
  console.log('')
  console.error('✨🚨 Falha ao conectar ao banco de dados 🚨✨');
  console.error('✨🚨 Para conectar com o banco, primeiro deve startars o docker desktop 🚨✨');
  console.error('✨🚨 após execute ==> docker start caixa_eletronico 🚨✨');
  console.error('✨🚨 Apos startar o doker e o container rode ==> npm rum dev 🚨✨');
  console.log('')
  console.log('')
  console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨');
  console.error({message: error.message});
});
