import React from "react";
// @function UserContext
const UserContext = React.createContext({email: "", auth: false});
// @function UserProvider
// Create function to provide UserContext
// @ts-ignore
const UserProvider = ({children}) => {
    const [user, setUser] = React.useState({email: "", auth: false});
    const loginContext = (email: string, token: string) => {
        setUser(() => ({
            email: email,
            auth: true,
        }));
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
    };
    const logout = () => {
        setUser(() => ({
            email: "",
            auth: false,
        }));
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };
    return (
        <UserContext.Provider value={{user, loginContext, logout}}>{children}</UserContext.Provider>
    );
};
export {UserContext, UserProvider};