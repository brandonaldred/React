import Meaning from './Meaning'
import playButton from '../play-button.svg'

export default function Body(props) {
    function Definition(props) {
        const {word, phonetics, meanings, sourceUrls} = props.definition[0]
        const phonetic = phonetics.length > 1 ? phonetics.pop() : phonetics[0]
        return(
            <main>
            <div>
                    <audio src={phonetic.audio}></audio>
                    <button className="play-button"><img src={playButton} /></button>
                </div>
                <h1>{word}</h1>
                <p className="phonetic">{phonetic.text}</p>
                {/*build card that repeats for each 'definition' type*/}
                {meanings.map((e, i) => (<Meaning key={i} partOfSpeech={e.partOfSpeech} definitions={e.definitions} synonyms={e.synonyms} />))}
                <hr />
                <p>Source <a href={sourceUrls} target="_blank">{sourceUrls}</a></p>
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