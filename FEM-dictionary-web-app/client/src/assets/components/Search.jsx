import search from '../iconoir_search.svg'
import { useState, useEffect } from 'react'



export default function Search(props) {
    const [input, setInput] = useState('')

    const performSearch = (e) => {
        e.preventDefault()
        props.setDataFetch(true)
        props.setSearch(input)
    }
    return(
        <form onSubmit={ performSearch }>
            <label id="search">
                <input value={input} type="text" onChange={(e)=> {setInput(e.target.value)}} onSubmit={(e) => {runSearch(e)}} />
                <img src={search}  onClick={ performSearch }/>
            </label>
        </form>
    )
}
