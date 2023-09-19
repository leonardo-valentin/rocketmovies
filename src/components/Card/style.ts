import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.CARD};

  width: 100%;
  height: 22rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > .stars {
    display: flex;
    color: ${({ theme }) => theme.COLORS.PINK};
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    > svg {
      width: 12px;
      height: 12px;
    }
  }

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
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      padding: 0.5rem 1.6rem;
    }

    > span + span {
      margin-left: 0.8rem;
    }
  }
`;
