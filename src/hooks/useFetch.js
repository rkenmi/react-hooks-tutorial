import {useState, useEffect} from "react";
import axios from "axios";

export const useFetch = (number) => {
    const [trivia, setTrivia] = useState({'trivia': ''})

    useEffect(() => {
        const _fetch = async () => {
            const result = await axios.get(`http://numbersapi.com/${number}/trivia`)
            console.log(result);
            setTrivia(trivia => ({trivia: JSON.stringify(result.data)}))
        }

        _fetch();
    }, [number]);

    return trivia;
}