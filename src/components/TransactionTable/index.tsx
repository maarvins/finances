import {useEffect} from "react"
import {Container} from "./styles"

export function TransactionTable() {
  useEffect(() => {
    fetch("https://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1.100,00</td>
            <td>Casa</td>
            <td>25/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
