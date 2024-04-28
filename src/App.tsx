import "./App.css";
import "@fontsource/inter";
import WOMGainedTable from "./components/WOM/WOMGainedTable";
import { Box, CssVarsProvider, extendTheme } from "@mui/joy";

const theme = extendTheme({
  components: {
    JoyTable: {
      styleOverrides: {
        root: {
          "& tr": { textAlign: "left" },
          "& th": { fontSize: "1rem", paddingLeft: "1rem" },
          "th:nth-child(3)": {
            textAlign: "center",
          },
          "td:nth-child(3)": {
            textAlign: "center",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <h1>wom-table</h1>
      <p>
        A recreation of <a href="https://wiseoldman.net/">Wise Old Man</a> for
        OSRS
      </p>
      <Box sx={{ maxWidth: "50rem" }}>
        <WOMGainedTable />
      </Box>
    </CssVarsProvider>
  );
}

export default App;
