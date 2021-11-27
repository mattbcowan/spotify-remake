import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  background: linear-gradient(0deg, #252525 40%, #836215 100%);
`;

const Home = () => {
  return (
    <Container>
      <header>
        <div>
          <div>
            <span>Back Button</span>
            <span>Forward Button</span>
          </div>
          <div>
            <span>Profile Button</span>
          </div>
        </div>
        <h1>Header Banner Goes Here</h1>
      </header>
      <main>
        <section>
          <h2>Good Morning</h2>
          <ul>
            <li>Frank Ocean - Nostalgia Ultra</li>
            <li>Ed Sheeran - =</li>
            <li>MBMBaM 587 - How Travis Got...</li>
            <li>Liked Songs</li>
            <li>Arctic Monkeys - My Favorite Worst...</li>
          </ul>
        </section>
      </main>
    </Container>
  );
};

export default Home;
