import { useTransactions } from '../../hooks/useTransactions';
import { formatAmount } from '../../utils/formatAmount';
import { formatDate } from '../../utils/formatDate';

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
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(({ amount, category, createdAt, id, title, type }) => (
              <tr key={ id }>
              <td>{ title }</td>
              <td className={ type.toLocaleLowerCase() }>{ type === 'DEPOSIT' ? formatAmount(amount) : `-${ formatAmount(amount) }` }</td>
              <td>{ category }</td>
              <td>{ formatDate(createdAt) }</td>
            </tr>
            ))
          }

        </tbody>
      </table>
    </Container>

  );
}
