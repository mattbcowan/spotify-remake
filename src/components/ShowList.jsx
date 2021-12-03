import styled from "styled-components";
import FatShowButton from "./FatShowButton";

const Container = styled.div`
  overflow: hidden;
  width: 320px;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const ShowsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  transform-origin: center center;
  transition: transform 0.5s;

  div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 260px;
    margin-right: 20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 1em;
    overflow-x: visible;
    scroll-snap-type: none;

    div {
      width: auto;
    }
  }
`;

const ListName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 1em 0;
`;

const ShowList = ({ data }) => {
  return (
    <Container>
      <ListName>{data.listName}</ListName>
      <ShowsContainer>
        {data.albums.map((i) => {
          return <FatShowButton key={i} />;
        })}
      </ShowsContainer>
    </Container>
  );
};

export default ShowList;
