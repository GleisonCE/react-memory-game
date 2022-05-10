import * as C from "./styles";

type InfoProps = {
  label: string;
  value: string;
};

export const InfoItem = ({ label, value }: InfoProps) => {
  return (
    <C.Container>
      <C.Label>{label}</C.Label>
      <C.Value>{value}</C.Value>
    </C.Container>
  );
};
