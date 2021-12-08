import React from "react"
import ReactDOM from "react-dom"
import {createServer, Model} from "miragejs"
import {App} from "./App"

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de Website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-12-08 20:00:00")
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createdAt: new Date("2021-12-09 09:00:00")
        }
      ]
    })
  },

  routes() {
    this.namespace = "api"

    //ROTA QUE RETORNA TRANSACTIONS
    this.get("/transactions", () => {
      return this.schema.all("transaction") //retornando os dados de dentro do schema
    })

    //ROTA QUE CRIA TRANSACTIONS
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data) //guardando dados GERADOS em TRANSACTIONS dentro do schema (DATABASE)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
