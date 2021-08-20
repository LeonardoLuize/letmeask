import { useContext } from "react";
import { createContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth(){
    const value = useContext(AuthContext)

    return value;
}