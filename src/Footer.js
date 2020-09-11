import React from 'react';
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__contact">
                <div className="footer__iconLink">
                    <Link to="https://www.facebook.com/ngocthinh.2909"><FacebookIcon className="footer__icon"/></Link>
                    <Link to="https://www.github.com/ngocthinh2909"><GitHubIcon className="footer__icon"/></Link>
                    <Link to="https://www.linkedin.com/in/ngocthinh2909/"><LinkedInIcon className="footer__icon"/></Link>
                </div>
                <div className="footer__info">
                    <p><strong>AMAZON CLONE BY ME</strong></p>
                    <p>Copy right 2020 | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
