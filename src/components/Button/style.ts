import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme, itemProp }) =>
    itemProp?.includes("dark") ? theme.COLORS.DARK_GRAY : theme.COLORS.PINK};
  border-radius: 0.8rem;
  width: 100%;
  border: none;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;

  color: ${({ theme, itemProp }) =>
    itemProp?.includes("dark")
      ? theme.COLORS.PINK
      : theme.COLORS.BACKGROUND_900};
  font-size: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;
