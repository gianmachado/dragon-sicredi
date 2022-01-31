import { ButtonStyle } from "./styles";
export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  text?: string;
};

export default function Button(props: ButtonProps) {
  const { text, ...otherProps } = props;

  return (
    <ButtonStyle type="button" {...otherProps}>
      {text}
    </ButtonStyle>
  );
}
