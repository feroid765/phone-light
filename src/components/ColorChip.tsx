import React from 'react';

const ColorChip: React.FC<{color: string}> = ({color}) => {
    return (
        <div className="colorChip" style={{backgroundColor: color.toString()}}/>
    );
};

export default ColorChip;
