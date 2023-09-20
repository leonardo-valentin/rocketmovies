import styled from "styled-components";

export const Container = styled.input`
  width: 100%;

  padding: 1.9rem 2.4rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  outline: none;

  @media (max-width: 1000px) {
    display: none;
  }
`;
