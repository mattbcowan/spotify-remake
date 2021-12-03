import LeftSideBar from "./components/LeftSideBar";
import Home from "./components/pages/Home";

const data = {
  playlists: ["Discover Weekly", "Rainy Day"],
};

function App() {
  return (
    <div>
      <LeftSideBar data={data} />
      <Home />
    </div>
  );
}

export default App;
