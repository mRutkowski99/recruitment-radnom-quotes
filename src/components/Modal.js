import { createPortal } from "react-dom";
import { StyledBackdrop, StyledOverlay } from "../styles/Modal.styled";
import Button from "./Button";

const Overlay = (props) => {
  return (
    <StyledOverlay>
      <h2>Something went wrong :(</h2>
      <h3>{props.error}</h3>
      <p>Please check your internet connection and try again later</p>
      <Button onClick={props.hideModalFn}>Close</Button>
    </StyledOverlay>
  );
};

const Backdrop = (props) => {
  return <StyledBackdrop>{props.children}</StyledBackdrop>;
};

const overlaysElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop>
          <Overlay error={props.error} hideModalFn={props.hideModalFn} />
        </Backdrop>,
        overlaysElement
      )}
    </>
  );
};

export default Modal;
