import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const el = useRef(null)
    if (!el.current) {
        el.current = document.createElement("div");
    }

    useEffect(()=>{
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(el.current);
        return () => modalRoot.removeChild(el.current);
    }, [])

    return createPortal(<div>{children}</div>, el.current)
}

export default Modal;