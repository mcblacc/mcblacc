import React, { useEffect } from "react";

import Logo from '../assets/images/logo.svg';

export default function Loader() {
    const loaderRef = React.createRef();
    const loadRef = React.createRef();
    const imageRef = React.createRef();

    useEffect(() => {
        setTimeout(() => {
            loadRef.current.classList.add('animate__fadeOutUp');
            imageRef.current.classList.add('animate__fadeOutDown');
        }, 3000);
        setTimeout(() => {
            loaderRef.current.classList.add('animate__fadeOut');
        }, 3500);
        setTimeout(() => {
            loaderRef.current.style.display = "none";
            document.getElementById('rel').style.display = "block";
        }, 4000);
    });

    return (
        <div className="loader animate__animated" ref={loaderRef}>
            <div className="load animate__animated animate__fadeInDown" ref={loadRef}>Please wait...</div>
            <img src={Logo} alt="asdf" ref={imageRef} className="animate__animated animate__fadeInUp" width="250vw" />
        </div>
    )
}