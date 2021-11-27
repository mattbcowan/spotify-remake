import styled from "styled-components";
import ButtonList from "./ButtonList";
import TextList from "./TextList";

const Container = styled.div`
  background-color: #181818;
  padding: 1rem;
`;

const LeftSideBar = ({ data }) => {
  return (
    <Container>
      <ButtonList />
      <TextList data={data.playlists} />
    </Container>
  );
};

export default LeftSideBar;
