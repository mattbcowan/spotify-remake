import styled from "styled-components";
import LongAlbumButton from "./LongAlbumButton";

const RecentContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const RecentListens = ({ data }) => {
  return (
    <RecentContainer>
      {data.map((albumInfo, i) => {
        return (
          <LongAlbumButton
            title={albumInfo.title}
            artist={albumInfo.artist}
            alt={albumInfo.albumCoverAlt}
            newlyAdded={albumInfo.newlyAdded}
            playable={albumInfo.playable}
            isPlaying={albumInfo.isPlaying}
            key={i}
          />
        );
      })}
    </RecentContainer>
  );
};

export default RecentListens;
