import React from "react";

import { ButtonContainer } from "./styles";

function Button({title, variant = "primary", onCLick}) {
  return (
    <ButtonContainer variant={variant} onCLick={onCLick}>
      {title}
    </ButtonContainer>
  );
}

export default Button;
