import react from 'react'

export default function Header(props) {
    return(
        <header>
            <p>{props.name} <img src={props.avatar} /></p>
        </header>
    ) 
}