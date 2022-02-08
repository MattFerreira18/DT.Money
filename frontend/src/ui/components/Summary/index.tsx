import { format } from '../../../utils/format';
import { useTransactions } from '../../../app/hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'DEPOSIT') {
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
        <strong>{ format.amount(summary.deposits) }</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>-{ format.amount(summary.withdraws) }</strong>
      </div>
      <div className={ `highlight-background ${summary.total >= 0 ? 'positive' : 'negative' }` }>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{ format.amount(summary.total) }</strong>
      </div>
    </Container>
  )
}
