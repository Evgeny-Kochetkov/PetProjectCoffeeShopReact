import { Nav } from "../Nav";
import { CoffeeLineImg } from "../CoffeeLineImg";

import { StyledFooter } from "./style";

export const Footer = ({refreshPage}) => {
    return (
        <StyledFooter>
            <Nav color='black' refreshPage={refreshPage}/>
            <CoffeeLineImg black alt='Coffee beans dividing line'/>
        </StyledFooter>
    )
}