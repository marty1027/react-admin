import { CssBaseline, ThemeProvider } from "@mui/material";
import { colorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";

function App() {

  const [theme, colorMode] = useMode();
  
  return (
    <colorMode.provider value={colorMode}>
      <ThemeProvider>
        <cssBaseline/>
        <div className="app">
          <main className="content">
            <Topbar />  
          <main/>
        </div>
      </ThemeProvider>
    </colorMode.provider>
  );
}

export default App;
