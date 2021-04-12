import { Container } from "./styles";

export function TransactionsTable() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="deposit">R$500</td>
            <td>Casa</td>
            <td>11/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdrawal">- R$500</td>
            <td>Casa</td>
            <td>11/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}