import GlobalStyle from "./styles/GlobalStyle";
import Button from "./components/Button";
import QuoteField from "./components/QuoteField";
import Modal from "./components/Modal";

import useRandomQuote from "./hooks/useRandomQuote";
import usePrevQuote from "./hooks/usePrevQuote";
import useModal from "./hooks/useModal";
import { useEffect } from "react";

function App() {
  //I stored all logic inside custom hooks and let my components be responsible only for presentation
  //Inside useRandomQuote I use another custom hook (useFetch) which fetches data from API.
  //useRandomQuote choose random quote, compares quotes and updates them
  const { isLoading, error, currentQuote, previousQuote, generateQuote } =
    useRandomQuote();

  //usePrevQuote allows to change displayed quote between current and previous one (if previous quote already exist)
  const { displayPrevious, showPrevious, showCurrent } = usePrevQuote(
    !!previousQuote
  );

  //useModal control displaying modal which informs user about fetching error
  const { isModalVisible, showModal, hideModal } = useModal();

  //If user generated new quote I want the 'current' one to be displayed
  useEffect(showCurrent, [currentQuote, showCurrent]);

  //Show modal if fetching error occurs
  useEffect(() => {
    if (error) showModal();
  }, [error]);

  return (
    <>
      <GlobalStyle />
      {isModalVisible && <Modal error={error} hideModalFn={hideModal} />}
      <h1>Generate random quote</h1>
      <div>
        <Button
          onClick={showPrevious}
          isDisabled={!previousQuote || displayPrevious}
        >
          Show previous quote
        </Button>
        <Button onClick={generateQuote}>Generate new quote</Button>
      </div>
      <QuoteField
        quote={displayPrevious ? previousQuote : currentQuote}
        loading={isLoading}
      />
    </>
  );
}

export default App;
