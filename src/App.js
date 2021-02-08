import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import { useStyles } from "./classes"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import banner from "./assets/marvel-group.jpg"
import logo from "./assets/marvel-logo.png"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#202020",
    },
  },
})

function App() {
  const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <div className={classes.title}>
                <img src={logo} alt="marvel-logo" width="100px" height="40px" />
              </div>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
      <div>
        <img src={banner} alt="banner" width="100%" height="50%" />
      </div>
      <div></div>
    </>
  )
}

export default App
