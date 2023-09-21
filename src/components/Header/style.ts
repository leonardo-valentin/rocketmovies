import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  grid-area: header;

  display: grid;

  grid-template-columns: 16.5rem auto 22rem;
  align-items: center;
  gap: 6.4rem;
  padding: 2.4rem 12.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};

  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div {
    display: flex;
    gap: 1.5rem;

    > .text {
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

  @media (max-width: 950px) {
    .input {
      display: none;
    }

    grid-template-columns: auto auto;
    justify-content: center;
  }

  @media (max-width: 500px) {
    gap: 1rem;
    text-align: center;
    grid-template-columns: auto;

    grid-template-rows: 7rem 7rem;
    > .text {
      text-align: center;
    }
  }
`;
