import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #f0f2f2;
`;

export const LoginCard = styled.div`
    background-color: #fff;
    padding: 3rem 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
  align-self: center;
`;

export const Title = styled.h2`
    text-align: center;
    color: #232f3e;
    margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;

    &:focus {
        outline: 2px solid #007185;
    }
`

export const Button = styled.button`
    background-color: #f3a847;
    color: #111;
    font-weight: bold;
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: #ddb347;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
    text-align: center;
`