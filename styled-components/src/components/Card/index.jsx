import React from "react";

import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  UserInfo,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserPicture,
} from "./styles";

function Card({srcImage}) {
  return (
    <CardContainer>
      <ImageBackground  src={srcImage}/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/103619024?v=4" />
          <div>
            <h4>João Marcos</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de React</h4>
          <p>
            Projeto feito com o curso de React no bootcamp Reac dio Globak
            avanade... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#React #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}

export default Card;
