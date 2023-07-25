import React from "react";
import { Button } from '@carbon/react';
function BasicExample(arg) {
    const handleClickScroll = (arg) => {
        const element = document.getElementById(arg);
        if (element) {
            element.scrollIntoView({behavior: 'smooth' });
        }
    };
    return (
        <Button className="btn-scroll" onClick={() => handleClickScroll("Container")}>
            Scroll Down
        </Button>
    );
}

export default BasicExample ;