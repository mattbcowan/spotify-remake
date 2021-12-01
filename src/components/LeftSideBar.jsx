import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import ButtonList from "./ButtonList";
import TextList from "./TextList";

const Container = styled.div`
  background-color: #181818;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;

  @media (min-width: 768px) {
    top: 0;
    width: calc(15%);
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
