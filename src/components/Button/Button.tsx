import { ButtonStyled } from "./Styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...rest}: ButtonProps) {
    return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}