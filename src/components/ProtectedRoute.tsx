import { ReactNode, useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
    children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const token = useContext(TokenContext).token
    if(token === null) {
        return (
            <Navigate to={'/'}/>
        )
    }
    return children
}