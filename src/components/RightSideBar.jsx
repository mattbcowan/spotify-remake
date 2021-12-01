import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";

const Container = styled.div`
  color: #fff;
  background-color: #181818;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  width: calc(15%);
  height: 100vh;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const FriendsHeader = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const FriendsInfo = styled.p`
  margin: 1rem 0;
`;

const FacebookButton = styled.button`
  width: 100%;
  background-color: #55a4fd;
  color: #fff;
  border: none;
  padding: 0.6rem 0;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 1rem;
  margin: 1rem 0;

  i {
    margin-right: 0.5rem;
  }
`;

const Disclaimer = styled.p`
  font-size: 0.75rem;
  line-height: 1.25rem;
`;

const RightSideBar = () => {
  return (
    <Container>
      <FriendsHeader>Friend Activity</FriendsHeader>
      <FriendsInfo>
        Connect with Facebook to see what your friends are playing
      </FriendsInfo>
      <FacebookButton>
        <i>
          <FaFacebookF />
        </i>
        Connect with Facebook
      </FacebookButton>
      <Disclaimer>
        We'll never post anything without your permission. Show and hide Friend
        Activity from Settings.
      </Disclaimer>
    </Container>
  );
};

export default RightSideBar;
