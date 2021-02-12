import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import { useStyles } from "./classes"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import logo from "./assets/marvel-logo.png"
import MediaCard from "./components/card/Card"
require("dotenv").config()

const CHARACTERS_API = `https://gateway.marvel.com/v1/public/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`

const SEARCH_API = `https://gateway.marvel.com/v1/public/characters?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}&name=`

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#202020",
    },
  },
})

function App() {
  const classes = useStyles()

  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getCharacter(CHARACTERS_API)
  }, [])

  const getCharacter = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.data.results)
      })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (search) {
      getCharacter(SEARCH_API + search)
      setSearch("")
    }
  }

  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }

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
                <form onSubmit={handleOnSubmit}>
                  <InputBase
                    placeholder="Search…"
                    value={search}
                    onChange={handleOnChange}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </form>
              </div>
            </Toolbar>
          </AppBar>
        </div>

        <div className="character-container">
          {characters.length > 0 &&
            characters.map((character) => (
              <MediaCard key={character.id} {...character} />
            ))}
        </div>
      </ThemeProvider>
      <div className="footer">
        <h4>Data provided by Marvel. © 2014 Marvel</h4>
      </div>
    </>
  )
}

export default App
