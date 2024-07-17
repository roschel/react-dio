import React from "react";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";
import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
        <UserInfo>
          <UserPicture />
          <div>
            <h4>João</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML</h4>
          <p>Projeto feito pelo curso de html e css no bootcamp</p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS</h4>
          <p>
            <FiThumbsUp /> 23
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};
export { Card };
