import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={90}
            nome={"João"}
            image={
              "https://avatars.githubusercontent.com/u/52433168?s=400&u=1224e8cabc7a1780c42610345c8ce4b667f07b7b&v=4"
            }
          />
          <UserInfo
            percentual={80}
            nome={"João"}
            image={
              "https://avatars.githubusercontent.com/u/52433168?s=400&u=1224e8cabc7a1780c42610345c8ce4b667f07b7b&v=4"
            }
          />
          <UserInfo
            percentual={70}
            nome={"João"}
            image={
              "https://avatars.githubusercontent.com/u/52433168?s=400&u=1224e8cabc7a1780c42610345c8ce4b667f07b7b&v=4"
            }
          />
          <UserInfo
            percentual={60}
            nome={"João"}
            image={
              "https://avatars.githubusercontent.com/u/52433168?s=400&u=1224e8cabc7a1780c42610345c8ce4b667f07b7b&v=4"
            }
          />
          <UserInfo
            percentual={50}
            nome={"João"}
            image={
              "https://avatars.githubusercontent.com/u/52433168?s=400&u=1224e8cabc7a1780c42610345c8ce4b667f07b7b&v=4"
            }
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
