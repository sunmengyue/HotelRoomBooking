import React from 'react';

const banner = (props) => {
    return(
        <div className="banner">
            <h1>{props.title}</h1>
            <div></div>
            <p>{props.subtitle}</p>
            {props.children}
        </div>
    );
}

export default banner;