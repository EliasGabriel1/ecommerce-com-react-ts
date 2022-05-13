import React from "react";
import { Logo } from "../Logo";

export function MainNavDesktop() {
    return (
        <><Logo/>
        <input placeholder="busque por produto, categoria ou marca..."/>
        <p>Serviços e atendimentos</p>
        <p>Minha conta e Meus pedidos</p>
        <div className="minicart"></div>
        </>
    )
}