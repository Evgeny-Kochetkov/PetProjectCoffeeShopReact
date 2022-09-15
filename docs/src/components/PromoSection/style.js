import styled from "styled-components";

import { theme } from '../../theme';

export const StyledPromoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${props => props.promoSrcImg}) 0 0/100% no-repeat;
    padding-bottom: 84px;
`;

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: left;
    margin-top: 30px;
    padding-left: 150px;
`;

export const StyledPromoTitle = styled.h1`
    margin-top: 110px;
    color: ${theme.colors.white};
    font-size: 40px;
    font-weight: 700;
    text-shadow: ${theme.shadow};
`;

export const StyledPromoDescr = styled.p`
    margin-top: 20px;
    color: ${theme.colors.white};
    font-size: 24px;
    text-shadow: ${theme.shadow};
`;

export const StyledButtonPromo = styled.button`
    margin-top: 20px;
    width: 120px;
    height: 30px;
    color: ${theme.colors.white};
    border: 1px solid #FFFFFF;
    filter: drop-shadow(${theme.shadow});
    font-size: 14px;
    border-radius: 3px;
    text-shadow: ${theme.shadow};
`;