import styled from "styled-components";

import { theme } from '../../theme';

export const StyledAboutSection = styled.section`
    display: flex;
    justify-content: center;
    padding: ${({propKey}) => propKey === 'mainPage' ? '80px 0 100px 0' : '80px 0 60px 0'};
`;

export const StyledAboutDescr = styled.p`
    color: ${theme.colors.black};
    text-align: center;
    white-space: pre-line;
`;

export const StyledWrapp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;