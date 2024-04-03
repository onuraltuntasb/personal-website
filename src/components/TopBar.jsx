import { useEffect, useRef, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import medium from '../assets/medium.png'
import cv from '../assets/cv.png'



const TopBar = () => {

    const navigate = useNavigate();

    const topbarRef = useRef(null);

    const [renderMobileMenuState, setrenderMobileMenuState] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 768) {
            stickyTopBar()
        }
    }, [])

    const stickyTopBar = () => {
        window.onscroll = function () { myFunction() };

        var sticky = topbarRef?.current.offsetTop;

        function myFunction() {
            if (window.scrollY >= sticky) {
                topbarRef?.current.classList.add("sticky")
            } else {
                topbarRef?.current.classList.remove("sticky");
            }
        }
    }

    const scrollToView = (id, e) => {
        e.preventDefault();
        let el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ block: 'start', behaviour: 'smooth', inline: 'start' });
        }
    }



    const renderMobileMenu = () => {
        return <>
            <div className="topbar-grid-item topbar-item" onClick={() => {
                setrenderMobileMenuState(false);
            }}>X</div>
            <div className="topbar-grid-item topbar-item" onClick={() => { setrenderMobileMenuState(false); navigate("/") }}>OA</div>
            <div className="topbar-grid-item topbar-item" onClick={(e) => {
                scrollToView("myjourneyh1", e);
            }}>work</div>
            <div className="topbar-grid-item topbar-item">story</div>
            <div className="topbar-grid-item topbar-item">experiences</div>
            <div className="topbar-grid-item topbar-item" title="onuraltuntasbusiness@gmail.com">contact</div>
            <div id="downloadmycv" className="topbar-grid-item topbar-item" title="download cv"><img height="28px" width="28px" src={cv} onClick={() => {
                setrenderMobileMenuState(false);
                navigate("/cv")
            }} /></div>
            <div id="linkedin" className="topbar-grid-item topbar-item"><img onClick={() => {
                window.open("https://www.linkedin.com/in/onur-altuntas1/", '_blank');
            }} height="28px" width="28px" src={linkedin} /></div>
            <div id="github" className="topbar-grid-item topbar-item"><img height="28px" width="28px" src={github} /></div>
            <div id="medium" className="topbar-grid-item topbar-item"><img height="28px" width="28px" src={medium} onClick={() => {
                window.open("https://medium.com/@onuraltuntasbusiness_99398", '_blank');
            }} /></div>
        </>
    }



    const renderTopbar = () => {
        if (window.innerWidth >= 768) {
            return <>
                <div ref={topbarRef} id="topbar">
                    <div className="topbar-grid-container">
                        <div className="topbar-grid-item topbar-item" onClick={() => { setrenderMobileMenuState(false); navigate("/") }}>OA</div>
                        <div className="topbar-grid-item topbar-item" onClick={(e) => {
                            scrollToView("myjourneyh1", e);
                        }}>work</div>
                        <div className="topbar-grid-item topbar-item">story</div>
                        <div className="topbar-grid-item topbar-item" onClick={(e) => {
                            scrollToView("portfolioh1", e);
                        }}>portfolio</div>
                        <div className="topbar-grid-item topbar-item" title="onuraltuntasbusiness@gmail.com" onClick={() => {
                            navigator.clipboard.writeText("onuraltuntasbusiness@gmail.com")
                            alert("contact copied to clipboard!")
                        }}>contact</div>
                        <div id="downloadmycv" className="topbar-grid-item topbar-item" title="download cv"><img height="28px" width="28px" src={cv} onClick={() => {
                            navigate("/cv")
                        }} /></div>
                        <div id="linkedin" className="topbar-grid-item topbar-item"><img onClick={() => {
                            window.open("https://www.linkedin.com/in/onur-altuntas1/", '_blank');
                        }} height="28px" width="28px" src={linkedin} /></div>
                        <div id="github" className="topbar-grid-item topbar-item"><img height="28px" width="28px" src={github} onClick={() => {
                            window.open("https://github.com/onuraltuntasb", '_blank');
                        }} /></div>
                        <div id="medium" className="topbar-grid-item topbar-item"><img height="28px" width="28px" src={medium} onClick={() => {
                            window.open("https://medium.com/@onuraltuntasbusiness_99398", '_blank');
                        }} /></div>



                    </div>
                </div>


            </>

        } else if (window.innerWidth < 768) {
            return <>
                <div ref={topbarRef} id="topbar">
                    <div className="topbar-grid-container">
                        <div className="topbar-grid-item topbar-item">OA</div>

                        <div id="topbar-menu" className="topbar-grid-item" onClick={() => {
                            setrenderMobileMenuState(true);
                        }}>=</div>

                    </div>
                </div>
            </>
        }
    }



    return (
        <>
            {renderMobileMenuState ? renderMobileMenu() : renderTopbar()}
            {!renderMobileMenuState ? <Outlet /> : null}

        </>
    )
}

export default TopBar