import CoffeeLineWhite from "./../../assets/icons/coffee-beans-white.svg";
import CoffeeLineBlack from "./../../assets/icons/coffee-beans-black.svg";

import { StyledCoffeeLineImg } from "./style";

export const CoffeeLineImg = (props) => {
    return <StyledCoffeeLineImg src={props.black ? CoffeeLineBlack : CoffeeLineWhite} alt='Coffee beans and dividing line'/>
}