import styled from "styled-components";

export const Container = styled.div`
  grid-template-rows: 11.6rem auto;
  grid-template-areas: "header" "content";
  width: 100%;
  height: 100vh;

  > main {
    max-width: 111.5rem;
    margin: 4rem auto 0;
    max-height: 60rem;
    overflow-y: auto;
    padding: 1.5rem;

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

export const LinkPosition = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  margin: 2.4rem 0;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 3.6rem;
  font-weight: 500;
`;

export const Form = styled.form`
  margin-bottom: 4rem;
  > div {
    display: flex;
    margin-bottom: 4rem;

    @media (max-width: 550px) {
      flex-direction: column;
    }
    > div + div {
      margin-left: 4rem;

      @media (max-width: 550px) {
        margin-top: 2.4rem;
        margin-left: 0;
      }
    }
  }

  > textarea {
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 27.5rem;
    padding: 2rem 1.6rem;
    resize: none;

    width: 100%;
    border: none;
    outline: none;

    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Markdown = styled.div`
  margin-bottom: 4rem;
  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 2.4rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: 8.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
    padding: 1.6rem;
    gap: 2.4rem;

    > span {
      padding: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;

  > button + button {
    margin-left: 4rem;
  }
`;
