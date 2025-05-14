import { createContext, ReactNode, useState } from "react";


type TokenContextType = {
    token: string | null,
    setToken: (token: string|null) => void
}

export const TokenContext = createContext<TokenContextType>({
    token: null,
    setToken: () => {}
})

type TokenProviderProps = {
    children: ReactNode
}

export const TokenProvider = ({ children }: TokenProviderProps) => {
    const [token, setToken] = useState<string|null>(localStorage.getItem("token"))
    const handleChangeToken = (newToken: string|null) => {
        setToken(newToken)
        if(newToken === null) {
            localStorage.removeItem("token")
            return
        }
        localStorage.setItem("token", newToken)
    }
    return (
        <TokenContext.Provider value={{token, setToken: handleChangeToken }}>
            {children}
        </TokenContext.Provider>
    )
}
