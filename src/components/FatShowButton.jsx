import styled from "styled-components";

const Container = styled.div`
  background-color: #616161;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.5s;

  &:hover {
    background-color: #797979;
  }
`;

const AlbumCover = styled.img`
  pointer-events: none;
  border-radius: 1rem;
`;

const AlbumInfoContainer = styled.div`
  color: #fff;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const FatShowButton = () => {
  return (
    <Container>
      <AlbumCover
        src="https://via.placeholder.com/160"
        alt="Album Cover"
        draggable="false"
      />
      <AlbumInfoContainer>
        <div>Title</div>
        <div>Extra info</div>
      </AlbumInfoContainer>
    </Container>
  );
};

export default FatShowButton;
