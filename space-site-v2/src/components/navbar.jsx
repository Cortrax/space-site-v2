import Icon from '../assets/photos/icon.png';
import Hamburg from '../assets/photos/hamburg.png';
import '../styling/navbar.scss';
import React, { useRef } from 'react';

function navbar() {
    const slideMenuRef = useRef();

    const slideMenuOut = () => {
        slideMenuRef.current.toog;
    };

    return (
        <>
            <div id='navbar'>
                <div id='title-div'>
                    <img src={Icon} id='title-icon' alt='title-icon' />
                    <h1 id='title'>SPACE HISTORY</h1>
                </div>
                <div id='links'>
                    <a href='#' className='link'>
                        PAST
                    </a>
                    <a href='#' className='link'>
                        PRESENT
                    </a>
                    <a href='#' className='link'>
                        FUTURE
                    </a>
                </div>
                <img
                    src={Hamburg}
                    alt='Hamburger icon'
                    id='hamburg-icon'
                    onClick={slideMenuOut}
                />
            </div>

            <div id='slide-menu' ref={slideMenuRef}>
                <div id='slide-menu-links'>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </>
    );
}
export default navbar;
