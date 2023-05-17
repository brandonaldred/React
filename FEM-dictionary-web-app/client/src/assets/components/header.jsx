import { useState } from 'react'
import logo from '../iconoir_book.svg'
import arrow from '../arrow.svg'

const FontOptions = () => { 
    return(
      <div className="fontOptions">
        <a data-font="sans" onClick={() => {}}>Sans Serif</a>
        <a data-font="serif" onClick={() => {}}>Serif</a>
        <a data-font="mono" onClick={() => {}}>Mono</a>
      </div>
    )
  }

export default function Header() {

  const [ theme, setTheme ] = useState('light')
  const isDark = theme === 'dark' ? true : false

  function toggleMode(bool) {
    setTheme(bool ? 'light' : 'dark')
  }

  const [ font, setFont ] = useState('Sans Serif')

  document.documentElement.dataset.theme = theme
  document.documentElement.dataset.font = font

    const FontOptions = () => { 
        return(
          <div className="fontOptions">
            <a data-font="Sans Serif" onClick={() => {setFont('Sans Serif'); setShowOptions(!showOptions)}}>Sans Serif</a>
            <a data-font="Serif" onClick={() => {setFont('Serif'); setShowOptions(!showOptions)}}>Serif</a>
            <a data-font="Mono" onClick={() => {setFont('Mono'); setShowOptions(!showOptions)}}>Mono</a>
          </div>
        )
    }
    const [ showOptions, setShowOptions ] = useState(false);
    return (
        <header>
            <img className="logo" src={logo} alt="Dictionary Web App" />
            <div className="font-select">
                <button data-font={font} onClick={() => {setShowOptions(!showOptions)}}>{font} <img src={arrow}  /></button>
                {showOptions && <FontOptions />}
            </div>
            <label className="switch">
                <input id="modeSelector" type="checkbox" onChange={() => { toggleMode(isDark) }} />
                <span htmlFor="modeSelector" className="slider"></span>
            </label>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
      </header>
    )
}