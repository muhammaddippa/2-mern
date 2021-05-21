import React from 'react'
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, KabayanLogo } from '../../../assets'

import './Footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={KabayanLogo} alt="kabayan-logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICDiscord} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright @ 2019 - 2020 Kabayan Coding All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
