import styled from "styled-components";

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.pink};
`;