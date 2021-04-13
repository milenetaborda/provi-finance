import Model from "react-modal";
import { Container, TransactionTypeContainer, Button } from "./styles";
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import closeIcon from '../../assets/close.svg';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleSubmitForm(event: FormEvent) {
    event?.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    
    onRequestClose();
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
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
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
