import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-center bg-gray-900 text-white  p-8">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Motion Wise</p>
            </aside>
        </footer>

    )
}

export default Footer;