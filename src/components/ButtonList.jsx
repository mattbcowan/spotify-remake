import React, { useState } from "react";
import styled from "styled-components";
import ButtonListItem from "./ButtonListItem";

const data = [
  {
    iconName: "BiHome",
    name: "Home",
  },
  {
    iconName: "BiSearch",
    name: "Search",
  },
  {
    iconName: "BiLibrary",
    name: "Your Library",
  },
];

const StyledUl = styled.ul`
  list-style: none;
  font-size: 1rem;
  border-bottom: 1px solid #494949;

  &:last-child {
    padding-bottom: 1rem;
  }
`;

const ButtonList = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <StyledUl id="StyledUl">
        {data.map((info, index) => {
          return (
            <ButtonListItem
              icon={info.iconName}
              name={info.name}
              isActive={active === index}
              onClick={() => setActive(index)}
              key={index}
            />
          );
        })}
      </StyledUl>
    </div>
  );
};

export default ButtonList;
