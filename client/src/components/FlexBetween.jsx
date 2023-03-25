import { Box } from "@mui/material";
import { styled } from "@mui/system";

/* 
The `FlexBetween` component renders 
a `Box` component that has the CSS styles
mentioned in the object literal passed as 
arguments to the `styled` function. In this case, 
it sets the CSS properties `display`, `justify-content` 
and `align-items` on the resulting component.
*/

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
