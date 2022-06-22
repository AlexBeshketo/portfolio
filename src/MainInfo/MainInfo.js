import '../css/default.css'
import '../css/purple.css'


export const MainInfo = () => {
    return (
        <div>


            <section className="s1">
                <div className="main-container">
                    <div className="greeting-wrapper typewriter">
                        <h1>Oleksii  Beshketo</h1>
                    </div>

                    <div className="intro-wrapper">
                        <div className="nav-wrapper">


                            <a href="App.js">
                                <div className="dots-wrapper">
                                    <div id="dot-1" className="browser-dot"></div>
                                    <div id="dot-2" className="browser-dot"></div>
                                    <div id="dot-3" className="browser-dot"></div>
                                </div>
                            </a>


                            <ul id="navigation">
                                <li><a href="App.js#contact">Contact</a></li>

                            </ul>
                        </div>

                        <div className="left-column">
                            {/*<img id="profile_pic" src="Alex2.jpg"/>*/}
                            <img id="profile_pic" src={require('../MainInfo/Alex2.jpg')} alt="loading..." />
                            <h5 style={{textAlign: 'center', lineHeight: '0'}}>Personalize Theme</h5>

                            <div id="theme-options-wrapper">
                                <div data-mode="light" id="light-mode" className="theme-dot"></div>
                                <div data-mode="blue" id="blue-mode" className="theme-dot"></div>
                                <div data-mode="green" id="green-mode" className="theme-dot"></div>
                                <div data-mode="purple" id="purple-mode" className="theme-dot"></div>
                            </div>

                            <p id="settings-note">*Theme settings will be saved for your next visit</p>
                        </div>

                        <div className="right-column">

                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" className="corner"></div>
                                    <div id="corner-tr" className="corner"></div>
                                    <h3>What I Do</h3>
                                    <p>I am a motivated React front-end developer who is not afraid of new
                                        challenges</p>
                                    <div id="corner-br" className="corner"></div>
                                    <div id="corner-bl" className="corner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

