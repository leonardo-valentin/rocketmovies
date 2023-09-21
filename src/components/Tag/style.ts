import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  span {
    font-size: 1.2rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 0.5rem 1.6rem;
  }

  > span + span {
    margin-left: 0.8rem;
  }
`;
