import "./App.css";
import "@fontsource/inter";
import WOMGainedTable from "./components/WOM/WOMGainedTable";
import { Box, CssVarsProvider } from "@mui/joy";

function App() {
  return (
    <CssVarsProvider defaultMode="dark">
      <Box>
        <WOMGainedTable />
      </Box>
    </CssVarsProvider>
  );
}

export default App;
