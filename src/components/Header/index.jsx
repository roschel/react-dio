import React from "react";

import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./styles";
import { UserPicture } from "../UserInfo/styles";

const Header = ({ autenticado = false }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..."></Input>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/52433168?s=400&u=1224e8cabc7a1780c42610345c8ce4b667f07b7b&v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title={"Entrar"} />
              <Button title={"Cadastrar"} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
