// Navbar.tsx
import React, { useState } from 'react';
import ButtonComponent from './scroll/ButtonComponent';
import '../styles/header.css'

interface NavbarProps {
    logo: string;
    menuItems: string[];
    scrollToBlock: (blockId: string) => void;
}

// Определите объект с соответствиями английских и русских значений
const translationMap: Record<string, string> = {
    Home: 'Главная',
    News: 'Новости',
    Events: 'События',
    Contact: 'Контакты',
};

const Navbar: React.FC<NavbarProps> = ({ logo, menuItems, scrollToBlock }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <ButtonComponent onClick={() => scrollToBlock(item)} text={translationMap[item]} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
