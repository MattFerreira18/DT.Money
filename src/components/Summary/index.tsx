
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';
import { formatAmount } from '../../utils/formatAmount';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>{ formatAmount(summary.deposits) }</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>-{ formatAmount(summary.withdraws) }</strong>
      </div>
      <div className={ `highlight-background ${summary.total > 0 ? 'positive' : 'negative' }` }>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{ formatAmount(summary.total) }</strong>
      </div>
    </Container>
  )
}
