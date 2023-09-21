import React from "react";
import ReactDOM from "react-dom/client";
import { Note } from "./pages/Note/index.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import GlobalStyles from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Note />
    </ThemeProvider>
  </React.StrictMode>
);
