import styled from "styled-components";

const FlexableImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const FlexableImage = ({ src, alt }) => {
  return <FlexableImg src={src} alt={alt} />;
};

export default FlexableImage;
