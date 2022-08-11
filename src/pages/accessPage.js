import { useEffect} from "react";
import { AccessComponent } from "../components"

export const AccessPage = () => {
    useEffect(() => {
        document.title = 'Access'
    });
    return (
        <>
            <AccessComponent />
        </>
    )
}