import styled from "styled-components";
import quoteLeft from "../assests/quote-left-svgrepo-com.svg";
import quoteRigth from "../assests/quote-right-svgrepo-com.svg";

//Fill color and dimentions of original svgs was changed

export const StyledQuoteField = styled.div`
  width: 50rem;
  height: 30rem;
  clip-path: polygon(
    0 0,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
  background-color: #fff;
  background-image: url(${quoteLeft}), url(${quoteRigth});
  background-position: 3% 3%, 97% 68%;
  background-repeat: no-repeat, no-repeat;
  color: #000;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Quote = styled.p`
  text-align: center;
  font-size: 2rem;
`;

export const Author = styled.p`
  align-self: flex-end;
  font-weight: 700;
  font-style: italic;
`;
