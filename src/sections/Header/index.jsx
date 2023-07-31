import digitalDice from './assets/digitalDice.svg'

import { HeaderStyle } from './style'

const Header = () => {

    return (
        <HeaderStyle>
            <a href="#">
                <h1>
                    <img src={digitalDice} alt="Digital Dice logo" />
                </h1>
            </a>
            <button>
                Login
            </button>
        </HeaderStyle>
    )
}

export default Header