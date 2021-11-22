const express = require('express')
const app = express()
const conn = require('./database/database')
const cors = require('cors')

const indexRoute = require('./app/routes/index.route')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('dotenv').config({
  path: process.env.NODE_ENV === "prod" ? ".env.production" : ".env"
})

app.use('/v1', indexRoute);

conn.authenticate().then(() => {
  console.log('Conectado ao PostgreSQL 👽');
}).catch((e) => {
  console.log(e);
});

app.listen(process.env.PORT, (erro) => {
  if (erro) {
    console.log('Falha ao iniciar o servidor 😨');
  } else {
    console.log(`Servidor iniciado na porta: ${process.env.PORT} 😎`);
  }
});
