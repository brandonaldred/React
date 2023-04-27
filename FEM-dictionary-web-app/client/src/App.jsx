import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'
import Header from './assets/components/Header'
import Definition from './assets/components/Definition'
import search from './assets/iconoir_search.svg'
import playButton from './assets/play-button.svg'
import './App.css'

// theme selection is based on user input - dark, light//
// font aoptionss are based on user input - serif, sans, mono //
// font size optionss are based on screen size - s, m, l //


function App() {
  const [ theme, setTheme ] = useState('light')
  const isDark = theme === 'dark' ? true : false

  function toggleMode(bool) {
    setTheme(bool ? 'light' : 'dark')
  }

  const [ font, setFont ] = useState('sans')

  document.documentElement.dataset.theme = theme
  document.documentElement.dataset.font = font

  const [word, setWord] = useState('')
  const [definition, setDefinition] = useState([])

  function createComponent (json) {
    useEffect(()=> {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${w}`)
        .then(res => res.json())
        .then(json => setDefinition(json))
        .catch(err => console.log(err)) 
      }, [definition])

  }

    

  return (
      <>
        <Header isDark={isDark} toggleMode={toggleMode} font={font} />
        <label id="search">
          <input value={word} type="text" onChange={(e)=> {setWord(e.target.value)}} onSubmit={(e) => {runSearch(e)}} />
          <img src={search}  onClick={()=>{createComponent(word)}}/>
          {definition.length > 0 && <Definition definition={definition}/>}
        </label>
        
      </> 
  )
}

export default App
