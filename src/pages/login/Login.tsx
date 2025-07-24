import { Container,
         LoginCard,
         Logo,
         Title,
         ErrorMessage,
         Subtitle
 } from './Styles';
import { Input } from '../../components/Input/Input';
import { useState } from 'react';
import { auth } from '../../services/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleLogin() {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError('');
            navigate('/dashboard');

            } catch (error) {
                console.error('Erro ao logar:', error);
            setError('Usuário ou senha inválidos');
        }
    }

    return (
        <Container >
            <LoginCard>
                <Logo src="/public/logokauan.svg" alt="Kauan Systems" />
                <Title>Bem vindo</Title>
                <Subtitle>Faça login para acessar o painel</Subtitle>

                <Input
                    type="email"
                    placeholder='Digite seu email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder='Digite sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <Button onClick={handleLogin}>Entrar</Button>
            </LoginCard>
        </Container >

    )
};
