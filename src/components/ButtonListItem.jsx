import styled from "styled-components";
import * as Icons from "react-icons/bi";

const StyledListItem = styled.li`
  color: #c4c4c4;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.5s;
  font-weight: 600;

  &:hover {
    color: #fff;
  }

  i {
    font-size: 1.5rem;
  }

  span {
    margin-left: 1rem;
  }
`;

const ActiveStyledListItem = styled(StyledListItem)`
  background-color: #464646;
  color: #fff;
`;

const IconComponent = ({ icon }) => {
  const Icon = Icons[icon];

  return <Icon />;
};

const ButtonListItem = ({ icon, name, isActive, onClick }) => {
  if (isActive) {
    return (
      <ActiveStyledListItem isActive={isActive} onClick={onClick}>
        <i>
          <IconComponent icon={icon} />
        </i>
        <span>{name}</span>
      </ActiveStyledListItem>
    );
  } else {
    return (
      <StyledListItem isActive={isActive} onClick={onClick}>
        <i>
          <IconComponent icon={icon} />
        </i>
        <span>{name}</span>
      </StyledListItem>
    );
  }
};

export default ButtonListItem;
