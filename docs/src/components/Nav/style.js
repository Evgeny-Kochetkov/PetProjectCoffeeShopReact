import styled from "styled-components";

import { theme } from './../../theme';


export const StyledUl = styled.ul`
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    align-items: end;
    justify-items: center;
    gap: 0 40px;
`;

export const StyledA = styled.a`
    color: ${({ color }) => color === 'black' ? theme.colors.black : theme.colors.white};
    text-shadow: ${({ shadow }) => shadow ? theme.shadow : 'none'};
`;

export const StyledLogoImg = styled.img`
    width: 35px;
`;