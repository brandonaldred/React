import Meaning from './Meaning'

export default function Body(props) {
    function Definition(props) {
    
        const {word, phonetics, meanings} = props.definition[0]
        const phonetic = phonetics.length > 1 ? phonetics.pop() : phonetics[0]
    
        return(
            <main>
                <h1>{word}</h1>
                <p>{phonetic.text}</p>
                <div>
                    <audio src={phonetic.audio}></audio>
                    <button className="play-button">Play</button>
                </div>
                {/*build card that repeats for each 'definition' type*/}
                {meanings.map((e, i) => (<Meaning key={i} partOfSpeech={e.partOfSpeech} definitions={e.definitions} synonyms={e.synonyms} />))}
                <hr />
                <p>Source <a>source</a></p>
            </main>
        )
    }

    return(
      <>
        {props.isLoading && (<h2>Loading Definition</h2>)}
        {props.definition.length > 0 && <Definition definition={props.definition}/>}
      </>
    )
  }