import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Home from "./components/pages/Home";

const data = {
  playlists: ["Discover Weekly", "Rainy Day"],
};

function App() {
  return (
    <div>
      <LeftSideBar data={data} />
      <Home />
      <RightSideBar />
    </div>
  );
}

export default App;
