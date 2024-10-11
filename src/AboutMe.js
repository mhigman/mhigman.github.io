import ProjectCard from './Project';


import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutMe.module.css'; // Adjust this based on your CSS module's file name
import UnderlineText from './Underline';
import Disclaimer from './Disclaimer';
import DevelopmentSkillCards from './DevelopmentSkillCards';



function AboutMe() {
    const elementsRef = useRef([]);

    const [firstLoaded, setFirstLoaded] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animateOnScroll);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);


    const projectsImpact = [
        {
            title: "Cybersecurity Attack Graph Provisional Patent",
            shortDescription: "Using a partial differential equation to weight a layered attack graph.",
            image: "cybersecurityflowchart.png",
            sourceLink: "https://github.com/mhigman/Personal-Project-Hub/tree/main/Curiousity-Gauntlet-And-Provisional-Patent",
            children: (<>
                <p>
                    I developed a process to weight an attack graph using quantitative measurements of threat severity, likelihood, and potential adverse impact through a partial differential equation.
                </p>
                <h2>Potential Impact</h2>
                <p>
                    As cybersecurity threats get more and more common over time, cybersecurity professionals have to prioritize how to secure their networks. Time is one of the most important resources when protecting a network. My provisional patent may enable cybersecurity professionals to better prioritize the order in which threats to their network need to be disarmed.
                </p>
            </>),
            darkImage: false
        },
        {
            title: "Arduino Interpreter (with MIT App Inventor)",
            shortDescription: "A way to communicate with an Arduino wirelessly eventually using MIT App Inventor.",
            image: "/mitappinventor.png",
            sourceLink: "https://github.com/mhigman/Personal-Project-Hub/tree/main/MIT-App-Inventor-Parser-JSON",
            children: (<>
                <p>I worked with the MIT App Inventor lab to develop a minium viable product for a JSON interpreter, running natively on Arduino, that assists in establishing interpreted, block-code communication between MIT App Inventor's block coding language and Arduino.</p>
                <Disclaimer>This project is currently under development for improvements to command length (I am overhauling this project to use bytecode).</Disclaimer>
                <h2>Potential Impact</h2>
                <p>
                    This interpreter, using some type of condensed bytecode or JSON, has the ability to execute complex commands wirelessly from any microcontroller supporting Arduino's firmware.
                </p>
                <p>
                    This means that many types of IoT projects with different microcontrollers and applications can all use this interface to seamlessly control a microcontroller with block code.  
                </p>
                <p>
                    In this way, considering the prevelance of IoT in everyday life as of late, the applications of this technology are limited only by the complexity of the commands being sent as well as a developer's imagination.
                </p>
                <p>
                    As IoT becomes an integral part of our daily living, learners need to be educated on how to use IoT to make real-world change. However, IoT is a complex and nuanced field that cannot be immediately known to a learner. My software could enable learners to learn about IoT while making significant, applicable changes in their community using their projects.
                </p>

            </>),
            darkImage: false
        },
        {
            title: "Control Theory Derivations",
            shortDescription: "Control Theory Derivations for more Precise Real-World Control.",
            image: "latexpage.png",
            sourceLink: "https://github.com/mhigman/Personal-Project-Hub/tree/main/Mechatronics-Control-Theory-Algs",
            children: (<>
                <p>Through LaTeX, I've documented some interesting derivations related to Control Theory. I have included two of my writings. First, I devised a method of defining a C1-continuous modified-trapezoidal profile given specific constraints related to acceleration, jerk, and final position. I also produced a general guide for 3D trajectory tracking with a SCARA arm and developed a visualization to show the trajectory algorithim in practice.</p>
                <h2>Potential Impact</h2>
                <p>
                    As the demand for precise yet rapid manufacturing continues to grow, cost-effective, fast, and open-loop control algorithims need to continually update. My ideas for open-loop control systems could potentially lead to more precise mechatronic system that could fufill manufacturing demand.
                </p>
                
            </>),
            darkImage: false
        },
        {
            title: "University of Arkansas MonArk SCARA Arm Controller",
            shortDescription: "A tool for MonArk's Quantum Foundry to control any SCARA arms using RMDL motors.",
            image: "monarkarm.jpg",
            sourceLink: "https://github.com/mhigman/Personal-Project-Hub/tree/main/University-of-Arkansas-SCARA-Code",
            children: (<>
                <p>I programmed a tool for controlling SCARA arms to aid in 2D nanofabrication with the University of Arkansas under the MonArk Quantum Foundry grant. This tool can be found in the 'monark-scara-arm-library' folder.</p>
                <p>Note that one of the dependencies of this library is RMDLAdafruit, which was a fork I made of the <a className={styles.undecoratedLink} href='https://github.com/matthieuvigne/RMDX-Arduino'>RMDX library</a>. The source code for this fork is in the 'RMDLAdafruit' folder.</p>
                <h2>Impact</h2>
                <p>
                    This tool was able to communicate with a particular type of motor that had legacy software, allowing the lab to use this cheaper motor, which helped keep costs low when producing the robotic assembly line for the Foundry.
                </p>
            </>),
            darkImage: true
        },
       
        // Add more projects as necessary
    ];
    const projectsSkills = [
        {
            title: "Robotics Odometry/PID Controller",
            shortDescription: "Custom-Made PID/Odometry Controller for VEX Robotics",
            image: "robot.jpg",
            sourceLink: "https://github.com/mhigman/Personal-Project-Hub/tree/main/Robot--22-23",
            children: (<>
                <p>I've made robotics code fully equipped with Odometry, PID, and angular PID control in my first two years of high school for Vex Robotics. Although Odometry and PID are well-known algorithims, implementing them independently in my first two years of high school gave me vital experience in control theory and robotics.</p>
            </>),
            darkImage: true
        },
        {
            title: "Ignite Client Projects",
            shortDescription: "Projects I've done with a team of peers in collaboration with companies.",
            image: "ignitelogo.png",
            sourceLink: "https://github.com/mhigman/Personal-Project-Hub/tree/main/Client-Projects",
            children: (<>
                <p>During my junior year, I completed multiple client projects for my professional studies class where I went above and beyond expectations, resulting in me and my team being invited to present at a corprate meeting for Walmart.</p>
                <p>One of these client projects eventually allowed me to expand upon the idea that is the subject of my recently filed provisional patent.</p>
                <p>The code for some of these projects can be found in the 'Arvest-Client-Project' and 'Walmart-Data-Science' folders.</p>
            </>),
            darkImage: false
        },
        // Add more projects as necessary
    ];

    return (
        <div className={styles.App} onLoad={() => {
            if(firstLoaded){
                window.scroll({ left: 0, top: 270, behavior:"smooth"})
                setFirstLoaded(false);
            }
        }}>
            <div className={styles.banner}>
                <div className={styles.imageConatiner}>
                    <img src={process.env.PUBLIC_URL + "/banner.jpg"} alt="Banner" className={styles.bannerImage} />
                    <div className={styles.altText}>Image Not Found :(</div>
                </div>    
                
            </div>
            <h1 className={styles.bannerTitle}>Miles Higman</h1>
            
            {/* About Section */}
            <div ref={(el) => elementsRef.current.push(el)} className={styles.description}>
                <p>
                    I'm just a country boy who aspires to study computer engineering. I love figuring things out by creating and doing. 
                </p>
            </div>


            

            <div ref={(el) => elementsRef.current.push(el)} className={styles.projects}>
                <h1 className={styles.projectsHeading}>My Projects</h1>
                <h2 className={styles.projectsHeading}>Notably Impacful Projects</h2>
                <div className={styles.projectGrid}>
                    {projectsImpact.map((project, index) => (
                        <ProjectCard project={project}>
                            {project.children}
                        </ProjectCard>
                    ))}
                </div>
                <h2 className={styles.projectsHeading}>Skill-Building Projects</h2>
                <div className={styles.projectGrid}>
                    {projectsSkills.map((project, index) => (
                        <ProjectCard project={project}>
                            {project.children}
                        </ProjectCard>
                    ))}
                </div>
            </div>

            <div className={styles.skillsContainer}>            
                <h2 ref={(el) => elementsRef.current.push(el)} className={styles.skillsTitle}>Development Skills</h2>
                <div ref={(el) => elementsRef.current.push(el)} >
                    <DevelopmentSkillCards skills={["JavaScript", "Node.js", "React", "Embedded Systems", "Arduino", "C++", "Control Theory", "Java", "Rust"]} />
                </div>
            </div>


            <a href="https://github.com/mhigman/Personal-Project-Hub" className={styles.buttonLink}>
                <button className={styles.gotoProjects}>View More Details</button>
            </a>
        </div>
    );
}

export default AboutMe;


/*function AboutMe() {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animateOnScroll);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={styles.App}>
            <div ref={(el) => elementsRef.current.push(el)} className={styles.hero}>
                <div className={styles.profilePicture}>
                    <img src={process.env.PUBLIC_URL + "/headshot.jpg"} alt="Profile"/>
                </div>
                <h1 className={styles.heading}>Miles Higman</h1>            
            </div>
            <p ref={(el) => elementsRef.current.push(el)} className={styles.description}> 
                &#9;&#9;A <UnderlineText text="motivated"/>, <UnderlineText text="intelligent"/>, and <UnderlineText text="passionate"/> student developer with experience in server side web development and embedded systems.
            </p>
            <h2 ref={(el) => elementsRef.current.push(el)} className={styles.skillsTitle}>Development Skills</h2>
            <div ref={(el) => elementsRef.current.push(el)}>
                <DevelopmentSkillCards skills={["JavaScript", "Node.js", "React", "Embedded Systems", "Arduino", "C++", "Control Theory", "Java", "Rust"]}/>
            </div>
            
            <div ref={(el) => elementsRef.current.push(el)} className={styles.projects}>
                <h2 className={styles.projectsHeading}>My Projects</h2>
                
                <div className={styles.projectList}>
                <Carousel autoSlideInterval={9000}>
                    <div>
                        <h3 className={styles.projectTitle}>Arduino Interpreter (with MIT App Inventor)</h3>
                        <p className={styles.projectDescription}>I worked with the MIT App Inventor lab to develop a minium viable product for a JSON interpreter, running natively on Arduino, that assists in establishing interpreted, block-code communication between MIT App Inventor's block coding language and Arduino.</p>
                        <p className={styles.projectDescription}>This project is  in the 'MIT-App-Inventor-Parser-JSON' project folder in the project files section of this site.</p>
                        <Disclaimer className={styles.projectDescription}>This project is currently under development for improvements to command length (I am overhauling this project to use bytecode.)</Disclaimer>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>LaTeX Derivations and Whitepapers</h3>
                        <p className={styles.projectDescription}>These PDFs, which can be found in the 'Other-Materials' folder, are some of the interesting derivations and ideas I've documented. Included are two papers about mechatronic motion planning and a whitepaper on a provisionally patented method of detecting cybersecurity threats from an attack graph.</p>
                        <p className={styles.projectDescription}>I am also working on a bytecode standards document to supplement the improvments I'm making to the first project.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Fraternal Order of Police (FOP) Website Backend Developer</h3>
                        <p className={styles.projectDescription}>I developed the backend for the FOP website, with features including a contact form, donations, database management, custom content management system, and a passkey authentication system. The codebase for this project can be found in the "fop-info-backend-functionality" folder.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Full Stack Web Applications</h3>
                        <p className={styles.projectDescription}>I've made multiple full-stack web applications (please excuse my lack of talent for UX) for exposure into higher level programming. Some examples of these type of web projects can be found in the 'Todo-List-App' and 'Chatroom-Web-App' folders.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Robotics Code and Simulations</h3>
                        <p className={styles.projectDescription}>I've made robotics code fully equipped with Odometry, PID, and angular PID control in my first two years of high school for Vex Robotics. Also, I made a simulation of the mechatronic 3D motion planning I devised to better elucidate the inner workings of the algorithim.</p>
                        <p className={styles.projectDescription}>These projects can be found in the 'Robot-Arm-3D-Sim' and 'Robot--22-23 folders.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Client Projects</h3>
                        <p className={styles.projectDescription}>During my junior year, I completed multiple client projects for my professional studies where I went above and beyond expectations, resulting in me and my team being invited to present at a corprate meeting for Walmart as well as my provisional patent.</p>
                        <p className={styles.projectDescription}>The code for each of these projects can be found in the 'Arvest-Client-Project', 'Walmart-Data-Science', and 'Curiousity-Gauntlet' folders.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>University of Arkansas SCARA Arm Controller</h3>
                        <p className={styles.projectDescription}>I programmed a tool for controlling SCARA arms to aid in 2D nanofabrication with the University of Arkansas under the MonArk Quantum Foundry grant. This tool can be found in the 'monark-scara-arm-library' folder.</p>
                        <p className={styles.projectDescription}>Note that one of the dependencies of this library is RMDLAdafruit, which was a fork I make of the <a className={styles.undecoratedLink} href='https://github.com/matthieuvigne/RMDX-Arduino'>RMDX library</a>. The source code for this fork is in the 'RMDLAdafruit' folder for completeness sake.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>Miscellaneous Projects</h3>
                        <p className={styles.projectDescription}>For completeness sake, I decided to include some miscellaneous projects, like a VSCode extension I developed and Wordle games I created, just to show that I do sort of hobbyist projects as well.</p>
                    </div>
                    <div>
                        <h3 className={styles.projectTitle}>This Site</h3>
                        <p className={styles.projectDescription}>Though I haven't published the source code for this website yet (soon<sup>TM</sup>), I did make this website through React and Express JS from scratch.</p>
                    </div>
                    </Carousel>
                </div>

                    <a href="/repo" className={styles.buttonLink}>
                        <button className={styles.gotoProjects}>View More Details</button>
                    </a>
            </div>
           
        </div>
    );
}*/

