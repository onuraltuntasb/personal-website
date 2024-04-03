import { useEffect } from "react";
import selfy from "../assets/selfy.png"
import uni from "../assets/uni.jpg"
import herogi from "../assets/herogi.png"
import freelance from "../assets/freelance.png"
import PortfolioPage from "../components/Portfolio";
import Portfolio from "../components/Portfolio";

const LandingPage = () => {


    useEffect(() => {

        var i = 0;
        var txt = ' Hey!👋I’m Onur and I’m a Software Engineer for over -3- years. I’m currently working  as a freelancer in Turkey.';
        var speed = 50;

        function typeWriter() {

            if (i < txt.length) {
                if (document.getElementById("demo").innerHTML.length % 30 == 0) {
                    document.getElementById("demo").innerHTML += "<br />";
                    document.getElementById("demo").innerHTML += txt.charAt(i);
                } else {
                    document.getElementById("demo").innerHTML += txt.charAt(i);
                }


                i++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();

    }, [])

    const renderLandingPage = () => {
        if (window.innerWidth >= 768) {
            return <>
                <div className="content">
                    <div className="landing-grid-container">
                        <div id="introduction" className="landing-grid-item">
                            <p id="demo"></p>
                        </div>
                        <div className="landing-grid-item">
                            <img height="256px" id="selfy" src={selfy} />
                        </div>
                    </div>

                    {renderCarreerSteps()}

                </div>
            </>
        } else if (window.innerWidth < 768) {
            return <>
                <div className="content">
                    <div style={{ textAlign: "center" }}>
                        <img height="256px" id="selfy" src={selfy} />
                    </div>
                    <div style={{ textAlign: "center" }} id="introduction">
                        <p id="demo"></p>
                    </div>

                    {renderCarreerSteps()}

                </div>
            </>
        }


    };

    const renderCarreerSteps = () => {
        return <>
            <div className="myjourney" >
                <h1 id="myjourneyh1">----- My Journey -----</h1>
                <p className="myjourney-header">It is important to make people`&apos;`s lives easy and discover new technologies but we should not forget power comes with responsibility so computer science not just programming it includes ethics</p>
            </div>


            <div className="myjourney-grid-container">
                <div className="myjourney-grid-item-left">
                    <img id="myjourney-img" src={uni}></img>
                </div>
                <div className="myjourney-grid-item-right">
                    <h3>Osmangazi University</h3>
                    <p> B.S. in Computer Science, earned May 2021</p>
                    <p> Eskişehir,Turkey</p>
                    <br />
                    <p> In my four years, my computer science professors helped me to understand engineering principles and how to deal with real world with all those group projects. It was not best practiceses or best education but real world is not much that different that. They made me realise how i could build my self in this world not just for tech sector. Especially, some of our professors who have their own software company they really helped us to understand how tech business works actually. I had my first job experience as intern in IT departent of Eczacıbaşı . It was necessary to graduate and it was fun to see corparate world  </p>

                </div>
            </div>

            <div className="myjourney-grid-container">
                <div className="myjourney-grid-item-left">
                    <img id="myjourney-img" src={herogi}></img>
                </div>
                <div className="myjourney-grid-item-right">
                    <h3>Herogı Software</h3>
                    <p> Software Engineer Intern</p>
                    <p> Istanbul,Turkey (remote)</p>
                    <br />
                    <p> It was my first software development job. I passed my time trying to understand how complex architectures works and how to build them from small piecies. My main job was migrate to legacy angular ui to react.js and yes, i started to development as a frontend dev. I wanted to learn both parts of the development process frontend and backend but i have not that much experience for backend in that time so i just observed backend parts of the work in my intern days.</p>

                </div>
            </div>

            <div className="myjourney-grid-container">
                <div className="myjourney-grid-item-left">
                    <img id="myjourney-img" src={herogi}></img>
                </div>
                <div className="myjourney-grid-item-right">
                    <h3>Herogı Software</h3>
                    <p> Fullstack Software Engineer</p>
                    <p> Istanbul,Turkey (remote)</p>
                    <br />
                    <p> I touched most parts of the project and learnt to many things about production ready apps. Migration of legacy ui to new ui finished and new features finally added to new ui. It was hard process to migrate one platform to completely new architecture but it gave me some experience of reverse engineering. I also touched devops parts (docker, CI/CD) and server managements(aws). Even if I not a fan of java world a learned a lot about jvm because of core part of our product was running on scala/jvm  </p>

                </div>
            </div>

            <div className="myjourney-grid-container">
                <div className="myjourney-grid-item-left">
                    <img id="myjourney-img" src={freelance}></img>
                </div>
                <div className="myjourney-grid-item-right">
                    <h3>Freelancer</h3>
                    <p> Freelance Fullstack Software Engineer</p>
                    <p> Istanbul,Turkey (remote)</p>
                    <br />
                    <p> After my seperation from herogi, i decided to improve my backend skills so i leaned how to design scalable apps, microservices and cloud computing mostly. In this time i worked as a freelancer in contracted jobs. I focused concepts more than programming in this period to understand core parts of modern product development. </p>

                </div>
            </div>


        </>
    }

    return (
        <>
            {renderLandingPage()}
            <br />
          
            <Portfolio />
        </>

    );

}

export default LandingPage;
