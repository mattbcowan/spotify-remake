import styled from "styled-components";
import FlexableImage from "./FlexableImage";
import Dot from "./Dot";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #616161;
  border-radius: 0.25rem;
  overflow: hidden;
  transition: background-color 0.5s;
  cursor: default;

  &:hover {
    background-color: #797979;
  }
`;

const RecentListenText = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 1rem 0 1rem;
  line-height: 1.5em;
  color: #fff;
  width: calc(50%);
`;

const NewEpisodeIndicator = styled.div`
  height: 100%;
  width: calc(5%);
  margin-top: 1.75rem;
  right: 1rem;
`;

const LongAlbumButton = ({
  title,
  artist,
  albumCoverAlt,
  albumCover,
  newlyAdded,
  isPlaying,
  playable,
}) => {
  return (
    <Container>
      <FlexableImage src="https://via.placeholder.com/80" alt={albumCoverAlt} />
      <RecentListenText>{title}</RecentListenText>
      <NewEpisodeIndicator>{newlyAdded ? <Dot /> : ""}</NewEpisodeIndicator>
    </Container>
  );
};

export default LongAlbumButton;
