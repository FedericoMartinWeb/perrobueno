import React from 'react'

const HalfCircle = ({ color, top, down }) => {

    const classes = `half_circle ${top ? 'top' : ''} ${down ? 'down' : ''}`;

    return (
        <span className={classes} style={{ backgroundColor: color }}></span>
    )
}

export default HalfCircle;