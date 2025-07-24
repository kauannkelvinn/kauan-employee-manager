import { Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import Dashboard from "./pages/dashboard/Dashboard"
import { GlobalStyle } from "./styles/global"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "./services/firebase/firebase"
import { PrivateRoute } from "./routes/PrivateRoutes"

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    })
  }, []);

  return (
    <>
    <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
        </PrivateRoute>
      } />
      </Routes>
      
    </>
  )
}

export default App
