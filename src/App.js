import styled from "styled-components";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Home from "./components/pages/Home";

const data = {
  playlists: ["Discover Weekly", "Rainy Day"],
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: auto;
`;

function App() {
  return (
    <Grid>
      <LeftSideBar data={data} />
      <Home />
      <RightSideBar />
    </Grid>
  );
}

export default App;
