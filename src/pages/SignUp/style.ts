import styled from "styled-components";
import backgroundImg from "../../assets/signimage.jpg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: opacity(0.3);
`;

export const Section = styled.div`
  width: 64rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -5rem;

  > div {
    max-width: 34.2rem;

    display: flex;
    flex-direction: column;
    > h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 4.8rem;
      font-weight: 700;
      align-self: flex-start;
    }

    > span {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 1.4rem;
      align-self: flex-start;
    }
  }
  > div {
    width: 34rem;

    h3 {
      margin: 4.8rem 0;
      font-size: 2.4rem;
      font-weight: 500;
    }

    button {
      margin-top: 1.6rem;
      margin-bottom: 4.2rem;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
