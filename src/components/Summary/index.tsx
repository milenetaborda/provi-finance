import { useContext } from 'react';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { TransactionsContext } from '../../context/TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const {transactions} = useContext(TransactionsContext);
  
  let deposit = 0;
  let withdrawal = 0;
  let total = 0;

  transactions.map(transaction => {
    if(transaction.type === 'deposit') {
     deposit +=transaction.amount
     total += transaction.amount;
    } else {
      withdrawal +=transaction.amount;
      total -= transaction.amount;
    }

    return {deposit, total, withdrawal}
  });
 
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt="Entradas"/>
        </header>
        <strong> 
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIcon} alt="Saídas"/>
        </header>
        <strong>-  
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(withdrawal)}
          </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total"/>
        </header>
        <strong> 
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(total)}
        </strong>
      </div>
    </Container>
  )
}
