import React, { useEffect, useState } from "react";
import Nav from "./Nav"
import "../stylesheet/generateQuote.css"


const GenerateQuote = () => {
    const [quotes, setQuotes] = useState("");

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((data) => {
                let randomNum = Math.floor(Math.random() * data.length);
                // if (data[randomNum].author == null) {
                //     let randomNum = Math.floor(Math.random() * data.length);

                // }
                setQuotes(data[randomNum]);

            });
    };
    useEffect(() => {
        console.log("quote")
        getQuote();
    }, []);

    return (
        <div>
            <div className="quote">
                <h1>"{quotes.text}"</h1>
                <h2 className="author">-{quotes.author}</h2>
                <button onClick={getQuote}>get quote</button>
            </div>

        </div>
    )
}

export default GenerateQuote;