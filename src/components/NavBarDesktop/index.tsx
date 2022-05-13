import React from "react";
import { BannerTarja } from "../BannerTarja";
import { Logo } from "../Logo";
import { MainNavDesktop } from "../MainNavDesktop";
import { Menu } from "../Menu";
// import { Navbar,ButtonHamurguer } from "./style";

export function NavBarDesktop() {
    return (
        <>
            <BannerTarja/>
            <MainNavDesktop/>
            <Menu/>
        </>
    )
}