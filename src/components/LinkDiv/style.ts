import styled from "styled-components";

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.6rem;
  }
`;
