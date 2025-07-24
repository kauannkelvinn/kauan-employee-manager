import { useEffect, useState} from "react";
import type { ReactNode } from "react";
import { auth } from "../services/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({ children}: PrivateRouteProps) {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("login");
            }
            setLoading(false);
        });
    }, [])

    if (loading) {
        return <p>Carregando</p>;
    }

    return <>{children}</>
}