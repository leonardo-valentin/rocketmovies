import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 0.8rem;
  width: 100%;
  border: none;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;
