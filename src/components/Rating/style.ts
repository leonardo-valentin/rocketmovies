import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.COLORS.PINK};
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  > svg {
    width: 12px;
    height: 12px;
  }
`;
