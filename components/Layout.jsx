import Footer from './Footer'
import Header from './Header'
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { Box } from "@mui/material"
import { useContext } from 'react';
import { ColorModeContext } from '../context/colorModeContext';

const Layout = ({children}) => {

    const {mode} = useContext(ColorModeContext)

    const theme = createTheme({
        palette: {
            mode,
        }
    });

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{fontFamily: 'Signika'}} >
          <Header />
          {children}
          <Footer />
        </Box>
      </ThemeProvider>
  )
}

export default Layout