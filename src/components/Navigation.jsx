import styled from "styled-components";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const NavigationButton = styled.div`
  height: 36px;
  width: 36px;
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
  border-radius: 2em;
`;

const NavButtonContainer = styled.div`
  display: flex;
`;

const Navigation = () => {
  return (
    <NavButtonContainer>
      <NavigationButton>
        <BiChevronLeft />
      </NavigationButton>
      <NavigationButton>
        <BiChevronRight />
      </NavigationButton>
    </NavButtonContainer>
  );
};

export default Navigation;
