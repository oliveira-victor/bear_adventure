import { FooterStyle } from "./style"

import logo from './assets/digitalDiceSecondary.svg'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import vfostudio from './assets/vfostudio.png'


const Footer = () => {

    let d = new Date()
    let year = d.getFullYear()

    return (
        <FooterStyle>
            <div className="footerContainer">
                <div className="footerIcons">
                    <img className="footerLogo" src={logo} alt="Digital Dice second logo" /><br />
                    <a href="https://github.com/oliveira-victor" target="_blank" rel="noreferrer">
                        <img className="icon" src={github} alt="GitHub icon" title="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-fo/" target="_blank" rel="noreferrer">
                        <img className="icon" src={linkedin} alt="LinkedIn icon" title="LinkedIn" />
                    </a>
                    <a href="https://vfostudio.vercel.app/" target="_blank" rel="noreferrer">
                        <img className="icon" src={vfostudio} alt="VFO Studio icon" title="VFO Studio" />
                    </a>
                </div>
                <div className="footerText">
                    <p>
                        &copy; {year} Digital Dice - A gaming company <br />All rights reserved.
                    </p>
                    <p>
                        This is a concept site created by Victor Freire Oliveira,<br /> including all the coding, design and visual elements.
                    </p>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer