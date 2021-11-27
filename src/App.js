import styled from "styled-components";
import LeftSideBar from "./components/LeftSideBar";
import Home from "./components/Home";

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
    </Grid>
  );
}

export default App;
