import { createContext, useEffect, useState} from "react"
import { netlifyIdentity } from "netlify-identity-widget"

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
})

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        //init netlify identity
        netlifyIdentity.init()
    }, [])
  return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;

