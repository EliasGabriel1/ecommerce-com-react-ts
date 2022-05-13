import React from "react";
import {BannerContainer} from './style';

export function Banner(){
    return(
        <BannerContainer>
            <picture>
                <img src="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_960_720.jpg" width="100%" alt="" />
            </picture>
        </BannerContainer>
    );
}