import React, { useState } from "react";
import styled from "styled-components";

const StyledTextList = styled.ul`
  list-style: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const StyledListItem = styled.li`
  margin: 0.5rem 0;
  color: ${(props) => (props.ishovered ? "#fff" : "#c4c4c4")};
  transition: color 0.5s;
`;

const TextList = ({ data }) => {
  const [hovered, setHovered] = useState(-1);

  const handleHovered = (index) => {
    setHovered(index);
  };

  const cancelHovered = () => {
    setHovered(-1);
  };

  return (
    <div>
      <StyledTextList>
        {data.map((info, index) => {
          return (
            <StyledListItem
              key={index}
              onMouseEnter={() => handleHovered(index)}
              onMouseLeave={cancelHovered}
              ishovered={hovered === index}
            >
              {info}
            </StyledListItem>
          );
        })}
      </StyledTextList>
    </div>
  );
};

export default TextList;
