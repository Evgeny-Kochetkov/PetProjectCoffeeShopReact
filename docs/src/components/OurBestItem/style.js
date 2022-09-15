import styled from "styled-components";

import { theme } from '../../theme';

export const StyledWrapperGrid = styled.ul`
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    gap: 60px 70px;
    margin-top: 40px;
`;

export const StyledA = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: ${({propKey}) => propKey === 'mainPage' ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255)'};
    border-radius: 8px;
    width: 220px;
    height: 240px;
    filter: ${({propKey}) => propKey === 'mainPage' ? 'none' : 'drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25))'};
`;

export const StyledLabel = styled.span`
    margin-top: 14px;
    color: ${theme.colors.black};
`;

export const StyledPrice = styled.span`
    margin-top: 10px;
    width: 100%;
    text-align: end;
    font-weight: 700;
    color: ${theme.colors.black};
`;

export const StyledCategory = styled.span`
    margin-top: 10px;
    width: 100%;
    text-align: end;
    font-weight: 400;
    color: ${theme.colors.black};
`;