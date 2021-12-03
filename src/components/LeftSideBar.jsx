import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import ButtonList from "./ButtonList";
import TextList from "./TextList";

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: auto;
  background-color: #181818;
  padding: 1rem 0;
  width: 100vw;

  @media (min-width: 768px) {
    top: 0;
    width: 20vw;
    height: 100vh;
    display: block;
  }
`;

const LeftSideBar = ({ data }) => {
  const isLargerThanPhone = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <Container>
      <ButtonList />
      {isLargerThanPhone && <TextList data={data.playlists} />}
    </Container>
  );
};

export default LeftSideBar;
