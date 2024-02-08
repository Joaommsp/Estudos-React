import React from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

import { Container, Column, Title, TitleHighLight } from "./styles";

function Feed() {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
        <Card srcImage="https://images.unsplash.com/photo-1656918931725-2f9d9fce4acb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
        <Card srcImage="https://images.unsplash.com/photo-1632686232158-e2ffc0fae81f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
        <Card srcImage="https://images.unsplash.com/photo-1680574828370-f1812594be65?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
        <Card srcImage="https://images.unsplash.com/photo-1656918931004-a455bc1c88de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
        <Card srcImage="https://images.unsplash.com/photo-1632686341324-d31503136805?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
        </Column>
        <Column flex={1}>
        <TitleHighLight> #TOP 5 da Semana</TitleHighLight>
        <UserInfo
          percentual={35}
          nome="João"
          image="https://avatars.githubusercontent.com/u/103619024?v=4"
        ></UserInfo>
         <UserInfo
          percentual={45}
          nome="João"
          image="https://avatars.githubusercontent.com/u/103619024?v=4"
        ></UserInfo>
         <UserInfo
          percentual={80}
          nome="João"
          image="https://avatars.githubusercontent.com/u/103619024?v=4"
        ></UserInfo>
         <UserInfo
          percentual={75}
          nome="João"
          image="https://avatars.githubusercontent.com/u/103619024?v=4"
        ></UserInfo>
        </Column>
      </Container>
    </>
  );
}

export default Feed;
