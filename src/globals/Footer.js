import './Footer.css';

import {FaInstagram, FaFacebook, FaGithub} from 'react-icons/fa/';

const Footer = () => {
    return (
        <div className = "footer-section">
            <div className = "icons">
                <FaInstagram className = "icon"/>
                <FaFacebook className = "icon"/>
                <FaGithub className = "icon"/>
            </div>
            Zotbotics 2021
        </div>
    );
}

export default Footer;