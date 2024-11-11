// src/utils/popUp.ts

interface Props {
  colors: { red: number; green: number; blue: number }[];
}

const popUp = ({ colors }: Props) => {
  const colorStrings = colors.map(
    (color) => `rgb(${color.red}, ${color.green}, ${color.blue})`
  );

  const result = colorStrings.join("\n");

  alert(result);
};

export default popUp;
