import '../css/default.css'
import '../css/purple.css'
import R from '../images/Russia.png'
import U from '../images/ukrraine.png'
import E from '../images/england.png'
import L from '../images/lt.png'


const AboutMe = () => {
    return (
        <div>
            <section className="s2">
                <div className="main-container">

                    <div className="about-wrapper">
                        <div className="about-me">
                            <h4>More about me</h4>
                            <p>27 y.o. Among my personal qualities I can single out the ability to prioritize, diligence, desire
                                to help</p>


                            <h4>Top expertise</h4>

                            <p>Fullstack developer with primary focus on React+ Redux: <a target="_blank"
                                                                                          href="../../src/resume.pdf">Download
                                Resume</a></p>

                            <div id="skills">
                                <ul>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    <li>Git</li>
                                </ul>

                                <ul>
                                    <li>GIT</li>
                                    <li>HTML/CSS</li>
                                    <li>Material UI</li>
                                    <li>Storybook</li>
                                    <li>Rest API</li>
                                </ul>

                            </div>

                        </div>


                        <div style={{textAlign: 'center'}}>
                            <h4>Сontacts</h4>
                            <div>
                                <a  href="tel:+37063919206" className="Blondie"><p>tel:+37063919206</p></a>
                                <a href="mailto:alexas.foje@gmail.com" className="Blondie"> <p>alexas.foje@gmail.com</p></a>
                            </div>

                            <h4>Languages</h4>
                            <img src={U} alt=""/>
                            <img src={L} alt=""/>
                            <img src={E} alt=""/>
                            <img src={R} alt=""/>

                            <h4>Find me on Linkedin & Github</h4>
                            <div>
                                <a target="_blank" href="https://www.linkedin.com/in/oleksii-b-a1987b174/?locale=en_US">
                                    <img className='gain-center'
                                         style={{width: '40px', height: '40px', marginRight: '10px'}}
                                         src={require('../images/linkedin.png')}
                                         alt="loading..."/>
                                </a>
                                <a target="_blank" href="https://github.com/AlexBeshketo">
                                    <img className='gain-center' style={{width: '40px', height: '40px'}}
                                         src={require('../images/github.png')}
                                         alt="loading..."/>
                                </a>
                            </div>
                            {/*<img src={require('../AboutMe/linkedin.gif')} alt="loading..." />*/}
                            {/*<a target="_blank" href="https://www.youtube.com/c/dennisivy">Linkedin</a>*/}

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutMe;