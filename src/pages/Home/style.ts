import styled from "styled-components";

export const Container = styled.div`
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";
  width: 100%;
  height: 100vh;

  > div {
    grid-area: content;
  }
`;
