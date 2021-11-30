import styled from "styled-components";

const Container = styled.div`
  background-color: #4b4b4b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.25rem;
`;

const AlbumCover = styled.img`
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
      <AlbumCover src="https://via.placeholder.com/160" alt="Album Cover" />
      <AlbumInfoContainer>
        <div>Title</div>
        <div>Extra info</div>
      </AlbumInfoContainer>
    </Container>
  );
};

export default FatShowButton;
