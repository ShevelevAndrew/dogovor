import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLogin } from "../store/login"

export const Out = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLogin({
        email: "",
        password: ""
        }));
},[dispatch])
}
