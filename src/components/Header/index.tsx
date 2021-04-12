import logo from '../../assets/logo.png'
import { Container } from './styles'

export function Header() {
  return(
    <Container>
      <div>
        <img src={logo} alt="Provi"/>

        <button type="button">
          Nova transação
        </button>
      </div>
    </Container>
  )
};
