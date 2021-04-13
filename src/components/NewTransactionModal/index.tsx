import Model from "react-modal";
import { Container, TransactionTypeContainer, Button } from "./styles";

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import closeIcon from '../../assets/close.svg';
import { FormEvent, useState } from "react";
import api from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleSubmitForm(event: FormEvent) {
    event?.preventDefault();

    const data =({
      title,
      value,
      category,
      type
    });

    api.post('/transactions', data);
  }
  
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
      
      <Container onSubmit={handleSubmitForm}>
        <h1>Cadastrar transação</h1>

        <input 
          placeholder="Título" 
          value={title} 
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor" 
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

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

        <input  
          placeholder="Categoria" 
          value={category} 
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
        
    </Model>
  )
};
