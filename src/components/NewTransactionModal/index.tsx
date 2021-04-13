import Model from "react-modal";
import { Container, TransactionTypeContainer, Button } from "./styles";

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import closeIcon from '../../assets/close.svg';
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  
  return(
    <Model 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type="button" onClick={onRequestClose}>
        <img src={closeIcon} alt="Fechar modal"/>
      </button>
      
      <Container>
        <h1>Cadastrar transação</h1>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <Button 
            type="button" 
            isColor="green"
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
          >
            <img src={incomeIcon} alt="Entrada"/>
            <span>Entrada</span>
          </Button>

          <Button 
            type="button" 
            isColor="red"
            isActive={type === 'withdrawal'}
            onClick={() => setType('withdrawal')}
          >
            <img src={outcomeIcon} alt="Saída"/>
            <span>Saída</span>
          </Button>
        </TransactionTypeContainer>

        <input  placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
        
    </Model>
  )
};
