import styled from "styled-components";

const ImageStyle = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: 50% 50%;
`;

export default function Image({ src }) {
  return <ImageStyle src={src} />;
}
