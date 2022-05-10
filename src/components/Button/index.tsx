import * as C from "./styles";

type ButtonProps = {
  label: string;
  icon?: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const Button = ({ label, icon, onClick }: ButtonProps) => {
  return (
    <C.Container onClick={onClick}>
      <C.IconArea>{icon && <C.Icon src={icon} />}</C.IconArea>
      <C.Label>{label}</C.Label>
    </C.Container>
  );
};
