import { useReducer } from "react";
import useFetch from "./useFetch";

const reducerFn = (state, action) => {
  return {
    previousQuote: state.currentQuote,
    quoteIndex: action.index,
    currentQuote: action.quote,
  };
};

const URL =
  "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

const useRandomQuote = () => {
  const [state, dispatch] = useReducer(reducerFn, {
    quoteIndex: null,
    currentQuote: null,
    previousQuote: null,
  });

  const { isLoading, error, fetchData } = useFetch();

  //getRandomQuote is passed to fetchData from useFetch as transforming data funtion.
  //It allows it to get ascess to fetched array, drawing new quote and updating state
  const getRandomQuote = (quotesArr) => {
    const randomIndex = Math.floor(Math.random() * quotesArr.length);

    if (randomIndex === state.quoteIndex) return getRandomQuote(quotesArr);

    dispatch({ index: randomIndex, quote: quotesArr[randomIndex] });
  };

  const generateQuote = () => fetchData(URL, getRandomQuote);

  return {
    isLoading,
    error,
    currentQuote: state.currentQuote,
    previousQuote: state.previousQuote,
    generateQuote,
  };
};

export default useRandomQuote;
