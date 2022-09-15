import { SectionTitle } from "../SectionTitle";
import { CoffeeLineImg } from "../CoffeeLineImg";

import { StyledAboutSection, StyledAboutDescr, StyledWrapp } from "./style";

export const AboutSection = ({aboutTitle, aboutSrcImg, aboutAltImg, aboutDescr, propKey}) => {
    const renderDescr = aboutSrcImg ? (
        <img src={aboutSrcImg} alt={aboutAltImg} style={{display: 'block'}}/>
    ) : null;

    return (
        <StyledAboutSection propKey={propKey}>
            {renderDescr}
            <StyledWrapp>
                <SectionTitle>
                    {aboutTitle}
                </SectionTitle>   
                <CoffeeLineImg black/>
                <StyledAboutDescr>
                    {aboutDescr}
                </StyledAboutDescr>
            </StyledWrapp>
        </StyledAboutSection>
    )
};