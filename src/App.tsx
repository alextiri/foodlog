import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './pages/Signup/Signup.tsx'
import Password from './pages/Password/Password.tsx'
import Home from './pages/Home/Home.tsx'
import Login from './pages/Login/Login.tsx'
import './App.css'
import { TokenProvider } from "./contexts/TokenContext.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import FoodEntry from "./pages/FoodEntry/FoodEntry.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path: "pass-reset",
    element: <Password/>
  },
  {
    path: "home",
    element: (
      <ProtectedRoute>
        <Home/>
      </ProtectedRoute>
    )
  },
  {
    path: "/foodentry",
    element: <FoodEntry/>
  }
]);

export default function App () {
  return (
    <div className="app">
        <TokenProvider>
            <RouterProvider router={router}/>
        </TokenProvider>
    </div>
  )
} 
