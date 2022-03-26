import React from 'react'
import text from '../data.json'

export default function Footer() {
    return (
        <footer className="bg-footer">
            <div className="container d-flex text-center m-auto justify-content-center align-items-center">
                <img src={text.Footer.img} className="img-fluid " width="5%" style={{ marginRight: "10px" }} alt="..." />
                <h2 className="text-center">{text.Footer.content}</h2>
            </div>
        </footer>
    )
}
