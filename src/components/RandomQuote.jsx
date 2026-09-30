import { quotes } from "../data";
import {React} from "react"
import { generateRandNr } from "../utils";

export const RandomQuote=({ Dicevalue }) => {

    const randqindex= generateRandNr(0,quotes.length)
    const index = (Dicevalue + randqindex) % quotes.length;
    const quote = quotes[index];
    console.log (index)
    return (
        <div>
            
            <p>{quote}</p>
        </div>
    );
}
