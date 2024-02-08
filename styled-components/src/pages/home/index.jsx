import React from "react";

import bannerImage from '../../assets/banner.png'
import Header from "../../components/Header";

import {Container, TextContent, Title, TitleHighLight} from './styles'
import Button from "../../components/Buttom";

function Home() {
  return <>
  <Header />
  <Container>
    <div>
      <Title>
      <TitleHighLight>Dio Global<br />
      </TitleHighLight>
      O seu futuro Global Agora!
      </Title>
      <TextContent>
        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional,
        evoluindo em comunidaqde com os melhores experts.
      </TextContent>
      <Button title="Começar agora" variant="secondary" onCLick={() => {}} />
    </div>
    <div>
      <img src={bannerImage} alt="Imagem principal" />
    </div>
    </Container>
  </>;
}

export default Home;
