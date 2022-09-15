import { StyledWrapperGrid, StyledA, StyledLabel, StyledPrice, StyledCategory} from "./style";

export const OurBestItem = ({listBestItemData, listItemData, propKey}) => {
    const bestItem = listBestItemData.map(({key, label, price, urlImg}) => {
        return (
            <li key={key}>
                <StyledA propKey={propKey} href={'#' + key}>
                <img src={urlImg} alt={label} />
                <StyledLabel>{label}</StyledLabel>
                <StyledPrice>{price + '$'}</StyledPrice>
                </StyledA>
            </li>
        )
    });

    const item = listItemData.map(({key, label, category, price, urlImg}) => {
        return (
            <li key={key}>
                <StyledA propKey={propKey} href={'#' + key}>
                <img src={urlImg} alt={label} />
                <StyledLabel>{label}</StyledLabel>
                <StyledCategory>{category}</StyledCategory>
                <StyledPrice>{price + '$'}</StyledPrice>
                </StyledA>
            </li>
        )
    });

    return (
        <StyledWrapperGrid>
            {propKey === 'mainPage' ? bestItem : item}
        </StyledWrapperGrid>
    )
};