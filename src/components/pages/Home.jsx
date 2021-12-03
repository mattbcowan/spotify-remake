import React from "react";
import styled from "styled-components";
import GreetingText from "../GreetingText";
import RecentListens from "../RecentListens";
import FlexableImage from "../FlexableImage";
import Navigation from "../Navigation";
import ShowList from "../ShowList";

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(0deg, #252525 40%, #836215 100%);
  height: 100vh;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Grid = styled.div`
  display: flex;
  padding-bottom: 8rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 20vw auto;
  }
`;

const Header = styled.header`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Page = styled.div`
  grid-column-start: 2;
  margin: 1rem;
`;

const data = [
  {
    title: "Nostalgia Ultra",
    artist: "Frank Ocean",
    newlyAdded: false,
    playable: true,
    isPlaying: false,
    albumCover: "https://via.placeholder.com/80",
    albumCoverAlt: "Frank Ocean's Nostalgia Ultra Album Cover",
  },
  {
    title: "Liked Songs",
    artist: "Matt Cowan",
    newlyAdded: false,
    playable: true,
    isPlaying: false,
    albumCover: "https://via.placeholder.com/80",
    albumCoverAlt: "Spotify Liked Songs List",
  },
  {
    title: "My Best Friend's Exorcism: An Interview with Grady Hendrix",
    artist: "Last Podcast on the Left",
    newlyAdded: true,
    playable: false,
    isPlaying: false,
    albumCover: "https://via.placeholder.com/80",
    albumCoverAlt: "Last Podcast Network",
  },
  {
    title:
      "#244 - Robert Crews: Afghanistan, Taliban, Bin Laden, and War in the Middle East",
    artist: "Lex Fridman Podcast",
    newlyAdded: true,
    playable: false,
    isPlaying: false,
    albumCover: "https://via.placeholder.com/80",
    albumCoverAlt: "Lex Fridman Podcast",
  },
  {
    title: "=",
    artist: "Ed Sheeran",
    newlyAdded: false,
    playable: true,
    isPlaying: false,
    albumCover: "https://via.placeholder.com/80",
    albumCoverAlt: "Ed Sheeran Equals Album Cover",
  },
  {
    title: "MBMBaM 587: How Travis Got His Woof Back",
    artist: "My Brother, My Brother & Me",
    newlyAdded: true,
    playable: false,
    isPlaying: false,
    albumCover: "https://via.placeholder.com/80",
    albumCoverAlt: "MBMBaM Podcast",
  },
  {
    title: "Favourite Worst Nightmare (Standard Version)",
    artist: "Arctic Monkeys",
    newlyAdded: false,
    playable: true,
    isPlaying: false,
    albumCover: "https://via.placeholder.com/80",
    albumCoverAlt: "Favourite Worst Nightmare (Standard Version) Album Cover",
  },
  {
    title: "Mitch All Together",
    artist: "Mitch Hedberg",
    newlyAdded: false,
    playable: true,
    isPlaying: false,
    albumCover: "https://via.placeholder.com/80",
    albumCoverAlt: "Mitch All Together Album Cover",
  },
];

const shows = [
  {
    listName: "Your shows",
    albums: [1, 2, 3, 4, 5],
  },
  {
    listName: "00s rock",
    albums: [1, 2, 3, 4, 5],
  },
  {
    listName: "Recently played",
    albums: [1, 2, 3, 4, 5],
  },
];

const Home = () => {
  let today = new Date();
  return (
    <Container>
      <Grid>
        <Page>
          <Navigation />
          <Header>
            <FlexableImage
              src="https://via.placeholder.com/1200x270"
              alt="Banner"
            />
          </Header>
          <main>
            <section>
              <GreetingText>
                {today.getHours() < 12 ? "Good Morning" : "Good Afternoon"}
              </GreetingText>
              <RecentListens data={data} />
              {shows.map((show, i) => {
                return <ShowList data={show} key={i} />;
              })}
            </section>
          </main>
        </Page>
      </Grid>
    </Container>
  );
};

export default Home;
