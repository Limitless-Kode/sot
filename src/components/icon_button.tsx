import React, { FunctionComponent, MouseEventHandler } from "react";

interface IButton{
    className?: string,
    children?: any,
    type: "button" | "reset" | "submit",
    onClick?: Function
}
const IconButton: FunctionComponent<IButton> = (props: IButton) => {
    const { children, className, type, onClick } = props;
    return (
        <button type={type} onClick={(evt) => onClick && onClick(evt)} className={`border-0 rounded-full flex justify-center items-center ${className}`}>
           {children}
        </button>
    );
}

export default IconButton;