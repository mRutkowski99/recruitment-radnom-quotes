import { StyledButton } from "../styles/Button.styled";

const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick} isDisabled={props.isDisabled}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
