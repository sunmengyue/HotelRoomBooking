import React from 'react';

const Hero = (props) => {
    return(
        <header className={props.hero}>
            {props.children}
        </header>
    )
}

export default Hero;
Hero.defaultProps = {
    hero:'defaultHero'
};