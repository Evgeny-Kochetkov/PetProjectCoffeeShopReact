import styled from "styled-components";

import OurBestBg from './../../assets/img/our-best-bg.jpg'

export const StyledOurBestSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({propKey}) => propKey === 'mainPage' ? '80px 0 110px 0' : '0 0 30px 0'};
    background: url(${({propKey}) => propKey === 'mainPage' ? OurBestBg : 'none'}) 0 0/100% no-repeat;
`;

export const StyledDividingLine = styled.span`
    width: 240px;
    height: 0px;
    border: 1px solid #000000;
`;