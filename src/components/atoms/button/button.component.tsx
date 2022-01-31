import styled from "styled-components";

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

const ButtonStyle = styled.button`
  font-size: 14px;
  background-color: var(--bs-yellow);
  padding: 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
