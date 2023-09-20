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

  > div {
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

  @media (max-width: 1024px) {
    .input {
      display: none;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;

    > div {
      div {
        text-align: center;
      }
    }
  }
`;
