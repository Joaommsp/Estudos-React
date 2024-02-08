import React from "react";

import Button from "../Buttom";
import MenuBtn from "../MenuBtn";

import logo from "../../assets/logo-dio.svg";

import "./styles.css";

import {
  BuscarInputContainer,
  // Coloumn,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  // UserPicture,
  Wrapper,
} from "./styles";

function Header({ autenticado }) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo Dio.me" className="logo" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <MenuBtn path="/" title="Menu"></MenuBtn>
              <UserPicture src="https://avatars.githubusercontent.com/u/103619024?v=4"></UserPicture>
            </>
          ) : (
            <>
              <MenuBtn path="/" title="Menu"></MenuBtn>
              <MenuBtn path="/feed" title="Feed"></MenuBtn>
              <MenuBtn path="/login" title="Cadastrar"></MenuBtn>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Header;
