import React from "react";
import {Foot} from "./style";
import { Copy } from "../Copy";
import { Termos } from "../Termos";
import { RegrasdeVenda } from "../RegrasdeVenda";
import { FormasdePagamento } from "../FormasdePagamento";
import { SegurancaeQualidade } from "../SegurancaeQualidade";
import { Logo } from "../Logo";
import { Links } from "../Links";

export function Footer(){
    return(
        <Foot>
            <div>
                <Links/>
                <Logo/>
            </div>
            <div>
                <FormasdePagamento/>
                <SegurancaeQualidade/>
            </div>
            <RegrasdeVenda/>
            <Termos/>
            <Copy/>
        </Foot> 
    );
}