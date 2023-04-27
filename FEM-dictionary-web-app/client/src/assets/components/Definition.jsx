import { useState } from 'react'

export default function Definition(props) {
    
    const {word, phonetics, meanings} = props.definition[0]
    console.log(meanings)
    const phonetic = phonetics.length > 1 ? phonetics.pop() : phonetics[0]
    
    function Meaning(item) {
        return(
            <div>
                <h2>Definition</h2>
                <h3>Meaning</h3>
                <ul>
                    <li>meaning 1</li>
                    <li>meaning 2</li>
                    <li>meaning 3</li>
                </ul>
                <h3>Synonyms <span>synonym</span></h3>
            </div>
        )
    }

    return(
        <main>
            <h1>{word}</h1>
            <p>{phonetic.text}</p>
            <audio controls>
                <source src={phonetic.audio} />
            </audio>
            {/*build card that repeats for each 'definition' type*/}
            <Meaning />
            <hr />
            <p>Source <a>source</a></p>
        </main>
    )
}