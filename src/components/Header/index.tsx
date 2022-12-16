import { Container, DiscontArea, TitleArea } from "./styles";

export function Header() {
    return (
      <Container>
        <DiscontArea>
            <p>Ganhe R$ 10,00 de desconto no frete</p>
        </DiscontArea>
        <TitleArea>
            <p>Jordan Shoes</p>
        </TitleArea>
      </Container>
    );
  }