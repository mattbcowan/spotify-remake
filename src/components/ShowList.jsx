import { useRef } from "react";
import styled from "styled-components";
import useDraggableScroll from "use-draggable-scroll";
import FatShowButton from "./FatShowButton";

const Container = styled.div`
  overflow: hidden;
  width: 75vw;

  @media (min-width: 768px) {
    width: 70vw;
    cursor: grab;
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
    scroll-snap-type: none;
  }
`;

const ListName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 1em 0;
`;

const ShowList = ({ data }) => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);
  return (
    <Container>
      <ListName>{data.listName}</ListName>
      <ShowsContainer ref={ref} onMouseDown={onMouseDown}>
        {data.albums.map((i) => {
          return <FatShowButton key={i} />;
        })}
      </ShowsContainer>
    </Container>
  );
};

export default ShowList;
