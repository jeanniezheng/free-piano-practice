import { useState, useEffect } from "react";
import Nav from "./Nav";
import "../stylesheet/generateQuote.css";

function GenerateQuote() {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        async function fetchQuote() {
            try {
                const res = await fetch("https://type.fit/api/quotes");
                const data = await res.json();
                const randomIndex = Math.floor(Math.random() * data.length);
                setQuote(data[randomIndex]);
            } catch (error) {
                console.error(error);
            }
        }
        fetchQuote();
    }, []);

    return (
        <div>
            <div className="quote">
                <h1>"{quote.text}"</h1>
                <h2 className="author">-{quote.author}</h2>
                {/* <button onClick={getQuote}>get quote</button> */}
            </div>
        </div>
    );
}

export default GenerateQuote;
