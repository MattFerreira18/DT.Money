import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type SubmitBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
}

export function SubmitButton({ title, type, ...props }: SubmitBtnProps) {
  return (
    <Container type="submit" {...props}>{ title }</Container>
  );
}
