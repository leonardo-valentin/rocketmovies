import styled from "styled-components";

export const Container = styled.div`
  grid-template-rows: 11.6rem auto;
  grid-template-areas: "header" "content";
  width: 100%;
  height: 100vh;

  > main {
    max-width: 111.5rem;
    height: 60rem;
    margin: 4rem auto;

    > section {
      height: 100%;
      overflow-y: auto;
      padding-right: 2rem;

      p {
        margin-top: 4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: justify;
        font-size: 1.6rem;
      }

      &::-webkit-scrollbar {
        width: 0.5rem;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }
  }
`;

export const LinkPosition = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Title = styled.div`
  margin-top: 2.4rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.6rem;
    font-weight: 500;
  }

  > div {
    margin-top: 0.3rem;
  }
`;

export const Subtitle = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  img,
  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > span {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    font-size: 1.6rem;
  }
`;
