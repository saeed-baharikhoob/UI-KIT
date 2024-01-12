export const NormalizeColor = (color: string) => {
  let normalizedColor;
  if (color.includes("#") && color.length === 4)
    normalizedColor = color + color.charAt(color.length - 1).repeat(3);
  else normalizedColor = color;
  return normalizedColor;
};
export const convertToDisableColor = (color: string) => {
  return NormalizeColor(color) + "59";
};
