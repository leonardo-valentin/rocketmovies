import styled from "styled-components";

export const Container = styled.div`
  grid-template-rows: 11.6rem auto auto;
  grid-template-areas: "header" "content-head" "content";
  width: 100%;
  height: 100vh;

  > section {
    grid-area: content-head;
    max-width: 80%;
    margin: 4.8rem auto;
  }

  > main {
    grid-area: content;
    max-width: 80%;
    margin: 4rem auto;
    max-height: 50rem;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Movies = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  > h2 {
    font-size: 3.2rem;
  }

  > div {
    width: 21rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;
