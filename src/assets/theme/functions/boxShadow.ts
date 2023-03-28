// Material Dashboard 2 React helper functions
import rgba from "@/assets/theme/functions/rgba";
import pxToRem from "@/assets/theme/functions/pxToRem";

const boxShadow = (
  offset: any[] = [],
  radius: any[] = [],
  color: string,
  opacity: number,
  inset: string = ""
) => {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
    spread
  )} ${rgba(color, opacity)}`;
};

export default boxShadow;
