import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 6.4rem;
  padding: 2.4rem 12.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};

  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > a {
    display: flex;
    gap: 1.5rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: end;
      width: 15rem;

      h3 {
        font-weight: 700;
        font-size: 1.4rem;
      }

      span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 1.4rem;
      }
    }

    img {
      border-radius: 3.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
      width: 6.4rem;
      height: 6.4rem;
    }
  }
`;

export const Search = styled.input`
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
