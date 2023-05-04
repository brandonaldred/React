import { useState, useEffect } from 'react'
import Header from './assets/components/Header'
import Search from './assets/components/Search'
import Body from './assets/components/Body'
import './App.css'

// theme selection is based on user input - dark, light//
// font aoptionss are based on user input - serif, sans, mono //
// font size optionss are based on screen size - s, m, l //


function App() {
  
  const [search, setSearch] = useState('')
  const [definition, setDefinition] = useState([])
  const [dataFetch, setDataFetch] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(()=> {
        if (dataFetch) {
          setLoading(true)
          fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
          .then(res => res.json())
          .then(data => setDefinition(data))
        }
        setDataFetch(false)
        setLoading(false)
      }, [dataFetch])
  
    

  return (
      <>
        <Header />
        <Search setDataFetch={setDataFetch} setSearch={setSearch}/>
        <Body definition={definition} isLoading={isLoading} />
      </> 
  )
}

export default App
