import React from 'react'

const HalfCircle = ({ color, top, down, up }) => {

    const classes = `half_circle ${top ? 'top' : ''} ${down ? 'down' : ''} ${up ? 'up' : ''}`;

    return (
        <span className={classes} style={{ backgroundColor: color }}></span>
    )
}

export default HalfCircle;