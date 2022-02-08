import { useTransactions } from "../../../app/hooks/useTransactions";
import { format } from "../../../utils/format";

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Listagem</th>
            {/* <th>4 items</th> */}
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(({ amount, category, createdAt, id, title, type }) => (
              <tr key={ id }>
              <td>{ title }</td>
              <td className={ type.toLocaleLowerCase() }>
                { type === 'DEPOSIT' 
                ? format.amount(amount) 
                : `-${ format.amount(amount) }` }
              </td>
              <td>{ category }</td>
              <td>{ format.date(createdAt) }</td>
            </tr>
            ))
          }

        </tbody>
      </table>
    </Container>

  );
}
