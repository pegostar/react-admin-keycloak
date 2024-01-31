import React, { useState } from 'react';

function DropdownLogOut({ content, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            {children}
            {isOpen && (
                <div style={{ display:'flex', justifyContent: 'center', position: 'absolute', top: '100%', left: -50, background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', padding: '5px', borderRadius: '5px', width: '100px' }}>
                    {content}
                </div>
            )}
        </div>
    );
}

export default DropdownLogOut;