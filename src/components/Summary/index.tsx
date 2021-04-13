import { useContext } from 'react';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';
import { TransactionsContext } from '../../context/TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const {transactions} = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt="Entradas"/>
        </header>
        <strong>R$2000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIcon} alt="Saídas"/>
        </header>
        <strong>- R$200,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total"/>
        </header>
        <strong>R$2000,00</strong>
      </div>
    </Container>
  )
}