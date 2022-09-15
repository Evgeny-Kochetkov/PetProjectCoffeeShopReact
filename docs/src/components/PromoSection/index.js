import { Nav } from "../Nav";
import { CoffeeLineImg } from "../CoffeeLineImg";

import { StyledPromoSection, StyledHeader, StyledPromoTitle, StyledPromoDescr, StyledButtonPromo } from "./style";

export const PromoSection = ({promoTitle, promoSrcImg, refreshPage, propKey}) =>{
    const renderPromo = propKey === 'mainPage' ? (
        <>
            <CoffeeLineImg alt='Coffee beans dividing line'/>
            <StyledPromoDescr>
                We makes every day full of energy and taste
            </StyledPromoDescr>
            <StyledPromoDescr>
                Want to try our beans?
            </StyledPromoDescr>
            <StyledButtonPromo>
                More
            </StyledButtonPromo>
        </>
    ) : null;
    
    return (
        <StyledPromoSection promoSrcImg={promoSrcImg}>
            <StyledHeader>
                <Nav shadow refreshPage={refreshPage}></Nav>
            </StyledHeader>
            <StyledPromoTitle>
                {promoTitle}
            </StyledPromoTitle>
            {renderPromo}
        </StyledPromoSection>
    )
};