// ButtonContainer.tsx
import React from 'react';
import ButtonComponent from './ButtonComponent';

interface ButtonContainerProps {
    menuItems: string[];
    scrollToBlock: (blockId: string) => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ menuItems, scrollToBlock }) => {
    return (
        <div>
            {menuItems.map((item, index) => (
                <ButtonComponent key={index} onClick={() => scrollToBlock(item)} text={item} />
            ))}
        </div>
    );
};

export default ButtonContainer;
