import { StyledQuoteField, Quote, Author } from "../styles/QuoteField.styled";

const QuoteField = ({ loading, quote }) => {
  let content = <p>Click button above to generate random quote</p>;
  if (loading) content = <p>Loading...</p>;
  if (quote) {
    content = (
      <>
        <Quote>{quote.quote}</Quote>
        <Author>{quote.author}</Author>
      </>
    );
  }

  return <StyledQuoteField>{content}</StyledQuoteField>;
};

export default QuoteField;
