import styled from "styled-components";

export const Container = styled.div`
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";
  width: 100%;
  height: 100vh;

  > section {
    grid-area: content;
    max-width: 80%;
    margin: 4.8rem auto;
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
`;
