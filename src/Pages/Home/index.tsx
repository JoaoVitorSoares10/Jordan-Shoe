import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Content, ContentTitle, ContentCards } from "./styles";

import Img01 from "../../Assets/images/1.png";
import Img02 from "../../Assets/images/2.png";
import Img03 from "../../Assets/images/3.png";
import Img04 from "../../Assets/images/4.png";
import Img05 from "../../Assets/images/5.png";
import Img06 from "../../Assets/images/6.png";
import Img07 from "../../Assets/images/7.png";
import Img08 from "../../Assets/images/8.png";

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Content>
        <ContentTitle>
          <h2>Destaques</h2>
          <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
        </ContentTitle>
        <ContentCards>
          <Card>
            <img src={Img01} alt=""/>
          </Card>
          <Card>
            <img src={Img02} alt=""/>
          </Card>
          <Card>
            <img src={Img03} alt=""/>
          </Card>
          <Card>
            <img src={Img04} alt=""/>
          </Card>
          <Card>
            <img src={Img05} alt=""/>
          </Card>
          <Card>
            <img src={Img06} alt=""/>
          </Card>
          <Card>
            <img src={Img07} alt=""/>
          </Card>
          <Card>
            <img src={Img08} alt=""/>
          </Card>
        </ContentCards>
      </Content>
      <Footer />
    </Container>
  );
}