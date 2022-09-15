import { SectionTitle } from "../SectionTitle";
import { Filter } from "../Filter";

import { StyledOurBestSection, StyledDividingLine } from "./style";

export const OurBestSection = ({propKey}) => {
    const renderTitle = propKey === 'mainPage' ? <SectionTitle>Our best</SectionTitle> : <StyledDividingLine/>;

    return (
        <StyledOurBestSection propKey={propKey}>
            {renderTitle}
            <Filter propKey={propKey}/>
        </StyledOurBestSection>
    )
};