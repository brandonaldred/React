import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import Header from './assets/components/header'
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

  function runSearch(e) {
    //perform search
    console.log(e)
    //empty searchbar
    setWord('');
  }

  return (
      <>
        <Header isDark={isDark} toggleMode={toggleMode} font={font} />
        <label id="search">
          <input value={word} type="text" onChange={(e)=> {setWord(e.target.value)}} onSubmit={(e) => {runSearch(e)}} />
          <img src={search}  onClick={()=>{runSearch(word)}}/>
        </label>
        <main>
          <h2>word</h2>
          <p>pronunciation</p>
          <img src={playButton} />
          <h3>type</h3>
          <h4>Meaning</h4>
          <ul>
            <li>meaning 1</li>
            <li>meaning 2</li>
            <li>meaning 3</li>
          </ul>
          <h4>Synonyms <span>word synonym</span></h4>
          <h3>type</h3>
          <ul>
            <li>meaning 1</li>
            <li>meaning 2</li>
            <li>meaning 3</li>
          </ul>
          <hr />
          <p>Source <span>www.sourceURL</span></p>
        </main>
      </>
        

  )
}

export default App
