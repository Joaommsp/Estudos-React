import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  font-family: "Poppins", sans-serif;
  background: #565656;
  border-radius: 22px;
  position: relative;
  border: 0;

  color: #ffffff;
  padding: 2px 12px;
  width: 100%;

  ${({ variant }) =>
    variant === "primary"
      ? ""
      : css`
          min-width: 167px;
          height: 33px;

          background: #e4105d;

          &:hover {
            opacity: 0.6;
            cursor: pointer;
          }

          &::after {
            content: "";
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
          }
        `}
`;
