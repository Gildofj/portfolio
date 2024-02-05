import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 3rem auto;

  @media screen and (max-width: 400px) {
    margin-right: 0;
  }
`;

interface TypeProps {
  $active: boolean;
}

export const Tab = styled.div<TypeProps>`
  display: flex;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  font-weight: semibold;
  margin: 0 0.5rem;
  cursor: pointer;
  gap: 0.5rem;
  color: ${({ $active, theme: { colors } }) =>
    $active ? colors.purple_800 : colors.text};
  transition: 0.2s;

  span > svg {
    color: ${({ $active, theme: { colors } }) =>
      $active ? colors.purple_800 : colors.text};
    fill: ${({ $active, theme: { colors } }) =>
      $active ? colors.purple_800 : colors.text};
  }

  &:hover {
    color: ${({ $active, theme: { colors } }) => !$active && colors.primary};

    span > svg {
      color: ${({ $active, theme: { colors } }) => !$active && colors.primary};
      fill: ${({ $active, theme: { colors } }) => !$active && colors.primary};
    }
  }

  @media screen and (max-width: 576px) {
    margin: 0 0.75rem;
  }
`;
