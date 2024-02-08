import React from "react";
import { MdEmail, MdLock } from "react-icons/md";

import bannerImage from "../../assets/banner.png";
import Header from "../../components/Header";
import Input from "../../components/Input";

import {
  Column,
  Container,
  CreateText,
  ForgetText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import Button from "../../components/Buttom";
import { Coloumn } from "../../components/Header/styles";

function Login() {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Coloumn>
          <Wrapper>
            <TitleLogin>Faça seu Cadastro</TitleLogin>
            <SubtitleLogin>Faça seu Login e make the change._</SubtitleLogin>
            <form action="">
              <Input placeholder="Email" />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Entrar"
                variant="secondary"
                leftIcon={<MdEmail />}
              />
            </form>
            <Row>
              <ForgetText>Esqueci minha senha</ForgetText>
              <CreateText>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Coloumn>
      </Container>
    </>
  );
}

export default Login;
