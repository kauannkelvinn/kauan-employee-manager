import { InputStyled } from "./Styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({type, placeholder, value, onChange }: InputProps)  {
    return (
        <InputStyled
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    )
}