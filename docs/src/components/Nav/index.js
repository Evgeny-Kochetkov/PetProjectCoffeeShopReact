import logoWhite from './../../assets/icons/coffee-beans-logo-white.svg';
import logoBlack from './../../assets/icons/coffee-beans-logo-black.svg';

import { StyledUl, StyledA, StyledLogoImg } from "./style";

export const Nav = ({color, refreshPage}) => {
    const listItemsData = [
        {key: 'mainPage', label: 'Coffee house'},
        {key: 'ourCoffeePage', label: 'Our coffee'},
        {key: 'forYourPage', label: 'For your pleasure'}
    ];

    const listItems = listItemsData.map(({key, label}) => {
        const renderLogo = key === 'mainPage' ? <StyledLogoImg src={color === 'black' ? logoBlack : logoWhite} alt="Logo white"/> : null;

        return (
            <li key={key}>
                <StyledA 
                    color={color} 
                    href={'#' + key}
                    onClick={() => refreshPage(key)}>
                    {renderLogo}
                    {label}
                </StyledA>
            </li>
        )
    });

    return (
        <nav>
            <StyledUl>
                {listItems}
            </StyledUl>
        </nav>
    )
};