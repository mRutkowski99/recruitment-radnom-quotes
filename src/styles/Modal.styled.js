import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
    transform: translateY(-4rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledOverlay = styled.div`
  width: 40%;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  animation: ${slideDown} ease-out 0.4s forwards;

  button {
    align-self: flex-end;
  }
`;
