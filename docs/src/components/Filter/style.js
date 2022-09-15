import styled from 'styled-components'

import { theme } from '../../theme';

export const StyledWrapGrid = styled.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    gap: 0 80px;
    margin-top: 60px;
`;

export const StyledWrapFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const StyledGrid = styled.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    gap: 0 20px;
`;

export const StyledFilterTitle = styled.h3`
    color: ${theme.colors.black};
`;

export const StyledFilterInput = styled.input`
    width: 180px;
    height: 30px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px;
    padding-left: 36px;
`;

export const StyledFilterButton = styled.button`
    width: 75px;
    height: 30px;
    color: ${theme.colors.black};
    font-size: 12px;
    font-weight: 700;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px 0px 0px 4px;
`;