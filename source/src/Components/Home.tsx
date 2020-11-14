import React from "react";
import { ShellTitle } from "./Shell";
import { FaHome } from "react-icons/fa";

export class Home extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <>
                <ShellTitle><FaHome/> Home</ShellTitle>
                <div style={{ textAlign: "center" }}>
                    <img src="/favicon.ico" className="spin" />
                </div>
            </>);
    }
}