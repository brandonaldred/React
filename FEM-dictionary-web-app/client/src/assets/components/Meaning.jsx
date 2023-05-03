export default function Meaning(props) {
    return(
        <div>
            <h2>{props.partOfSpeech}</h2>
            <h3>Meaning</h3>
            <ul>
                {props.definitions.map((definition,i) => (<li>{definition.definition}</li>))}
            </ul>
            {props.synonyms.length > 0 && <h3>Synonyms {props.synonyms.map((synonym, i) => (<span>{synonym}</span>))}</h3>}
        </div>
    )
}