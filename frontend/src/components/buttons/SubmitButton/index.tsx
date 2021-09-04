import { Container } from "./styles";

type SubmitBtnProps = {
  title: string;
}

export function SubmitButton({ title }: SubmitBtnProps) {
  return (
    <Container type="submit">{ title }</Container>
  );
}
