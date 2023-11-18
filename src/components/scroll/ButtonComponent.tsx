// ButtonComponent.tsx
import React from 'react';

interface ButtonProps {
    onClick: () => void;
    text: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <p onClick={onClick}>{text}</p>
    );
};

export default ButtonComponent;