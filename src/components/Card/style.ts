import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.CARD};

  width: 100%;
  height: 22rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h3 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  > p {
    color: #999591;
    font-size: 1.6rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  > div:last-child {
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
  }

  @media (max-width: 500px) {
    height: 30rem;

    > div:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      span {
        width: fit-content;
      }
      > span + span {
        margin: 0;
      }
    }
  }
`;
