import styled from "styled-components";
import FatShowButton from "./FatShowButton";

const ShowsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1em;
`;

const ListName = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 1em 0;
`;

const ShowList = ({ data }) => {
  return (
    <div>
      <ListName>{data.listName}</ListName>
      <ShowsContainer>
        {data.albums.map((i) => {
          return <FatShowButton key={i} />;
        })}
      </ShowsContainer>
    </div>
  );
};

export default ShowList;
