import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.COLORS.PINK};
  gap: 0.8rem;
  > svg {
    width: ${({ itemProp }) => (itemProp?.includes("isbig") ? "20px" : "12px")};
    height: ${({ itemProp }) =>
      itemProp?.includes("isbig") ? "20px" : "12px"};
  }
`;
