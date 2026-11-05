import express from 'express'
import atendimento from './router/atendimento.js'
import cliente from './src/router/cliente.js'
import database from './src/config/database.js'       

const app = express();
app.use(express.json())

app.use("/api/v1/atendimento", atendimento)
app.use("/api/v1/cliente", cliente)

database.db
.sync({ force: false })
.then((_) => {
    app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
  })
})
.catch((e) => {
    console.log(e)
})