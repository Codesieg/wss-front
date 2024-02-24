import React from 'react';

import './tooltip.css';

// Position is the position of the tooltip it can be right, left, bottom, top
const Tooltip = ({text, position}) => {
    return (
        <div className="tooltips">
            <span className={`tooltiptext tooltiptext--${position}`}>{text}</span>
        </div>
    );
};

export default Tooltip;