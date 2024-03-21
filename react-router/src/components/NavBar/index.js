import React from "react";
import './style.css'
import { Outlet, Link } from "react-router-dom";

export function NavBar() {
    return (
        <>
            <ur className="NavBar-list">

                <li className="NavBar-item">
                    <Link to="/">HOME</Link>
                </li>

                <li className="NavBar-item">
                    <Link to="/interprise">EMPRESA</Link>
                </li>

                <li className="NavBar-item">
                    <Link to="/contact">CONTATO</Link>
                </li>
            </ur>
            <Outlet /> {/* Outlet serve para tornar possível a funcionalidade da NavBar */}
        </>
    )
}