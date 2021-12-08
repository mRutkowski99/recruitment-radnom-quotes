import styled from "styled-components";

export const StyledButton = styled.button`
  outline: none;
  border: none;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.isDisabled ? "#333" : "#8436ad")};
  color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(132, 54, 173, 0.4);
  border-radius: 0.5rem;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  transition: all ease-out 0.2s;

  &:hover {
    background-color: ${(props) => (props.isDisabled ? "#333" : "#9642c2")};
  }

  &:active {
    ${(props) =>
      !props.isDisabled &&
      `transform: translateY(3px);
      box-shadow: 0 0.25rem 0.5rem rgba(132, 54, 173, 0.4);`}
  }

  &:not(:last-child) {
    margin-right: 5rem;
  }
`;
