import { useCallback, useState } from "react";

const usePrevQuote = (isPreviousGenerated) => {
  const [displayPrevious, setDisplayPrevious] = useState(false);

  const showPrevious = () => {
    if (!isPreviousGenerated) return;
    setDisplayPrevious(true);
  };

  const showCurrent = useCallback(() => setDisplayPrevious(false), []);

  return {
    displayPrevious,
    showPrevious,
    showCurrent,
  };
};

export default usePrevQuote;
