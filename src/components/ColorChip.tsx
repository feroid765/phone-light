import React from 'react';
import {Color} from 'react-color';

const ColorChip: React.FC<{color: Color}> = ({color}) => {
    return (
        <div className="colorChip" style={{backgroundColor: color.toString()}}/>
    );
};

export default ColorChip;
