import React from 'react';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large']

const Button = ({
    children,
    type,
    onClick,
    styleButton,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(styleButton) ? styleButton : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] ;
    return (
        <>
           <button
           type={type ? type : 'button'}
           className={`btn ${checkButtonStyle} ${checkButtonSize}`}
           onClick={onClick}
           >
               {children}
            </button> 
        </>
    );
};

export default Button;