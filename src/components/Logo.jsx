
import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {

    function handleClick() {
        window.scrollTo(0, 0);

    }
    return (
        <div className="logo-header">


            <Link to={"/"}>

                <h1 onClick={handleClick}>UnityCare</h1>
            </Link>

        </div>
    )
}

