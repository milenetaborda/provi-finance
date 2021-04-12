import logo from '../../assets/logo.png';
import { Container } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return(
    <Container>
      <div>
        <img src={logo} alt="Provi"/>

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </div>
    </Container>
  )
};
