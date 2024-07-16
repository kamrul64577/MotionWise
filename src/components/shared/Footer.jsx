import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer bg-gray-900 text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-center md:text-left w-full md:w-auto mb-4 md:mb-0">Copyright © {new Date().getFullYear()} - All rights reserved by Imperium Scale</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61561428628813" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://x.com/muhseenali_" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/muhseenali.4" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhseen-ali-408803314/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://www.youtube.com/@MuhseenAli4" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
