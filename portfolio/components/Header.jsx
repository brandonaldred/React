import React from 'react'
import styles from './header.module.css'
import logo from '../assets/icons/brandonaldred.svg'

export default function Header () {

    return(
        <header>
            <a href="/"><img src={logo.src}  alt="Brandon Aldred" /></a>
            <nav>
                <ul>
                    <li><a href="/portfolio">portfolio</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}