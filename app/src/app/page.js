import { ThemeProvider } from "@mui/material";
import HomePage from "../pages/HomePage";
import theme from "../constant/theme";


export default function Home() {
  return (
   <>
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
   </>
  );
}
