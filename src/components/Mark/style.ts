import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 400;

  color: ${({ theme, itemProp }) =>
    itemProp?.includes("isnew") ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};

  background: ${({ theme, itemProp }) =>
    itemProp?.includes("isnew") ? "none" : theme.COLORS.BACKGROUND_800};

  border: ${({ theme, itemProp }) =>
    itemProp?.includes("isnew")
      ? "1px dashed " + theme.COLORS.GRAY_100
      : "none"};

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 700;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
