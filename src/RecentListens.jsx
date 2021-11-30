import styled from "styled-components";
import LongAlbumButton from "./components/LongAlbumButton";

const RecentContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
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
