import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import { forwardRef } from "react";

const StyledInputElement = styled("input")({
  fontFamily: "'Alegreya Sans', sans-serif",
  fontSize: "1.25rem",
  fontWeight: 400,
  lineHeight: 1,
  padding: 12,
  borderRadius: 4,
  border: "solid 1px #CCCCCC",
  flex: 1,
});

export const Input = forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled
      slots={{ input: StyledInputElement }}
      style={{ display: "flex" }}
      {...props}
      ref={ref}
    />
  );
});
