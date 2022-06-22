import '../css/default.css'
import '../css/purple.css'

import first from '../images/pica.jpg'
import thirth from '../images/todolist.jpg'
import second from '../images/SN.jpg'


export const Projects = () => (
    <>
        <section className="s1">
            <div className="main-container">
                <h3 style={{textAlign: 'center'}}>My projects </h3>


                <div className="post-wrapper">

                    <div className='transition-container'>
                        <div>
                            <div className="post">
                                <img className="thumbnail" src={second}
                                     alt='photi'/>
                                <div className="post-preview">
                                    <h6 className="post-title">Social Network</h6>
                                    <p className="post-intro">Project uses TS, React, Redux and many another
                                        libraries (Material UI, ReactHookForm, etc. )</p>
                                    <a href="https://alexbeshketo.github.io/socialnetwork/"><p className='gain-center'>Open</p></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='transition-container'>
                        <div>
                            <div className="post">
                                <a href="https://alexbeshketo.github.io/pizza/"><img className="thumbnail" src={first}
                                                                                     alt='pizaa'/></a>
                                <div className="post-preview">
                                    <h6 className="post-title">Pizzeria website</h6>
                                    <p className="post-intro">Project uses React, Redux, Material UI, also use
                                        data from server</p>
                                    <a  href="post.html"><p className='gain-center'>Open</p></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='transition-container'>
                        <div>
                            <div className="post">
                                <a href="https://alexbeshketo.github.io/pizza/"><img className="thumbnail"
                                                                                     src={thirth}/></a>
                                <div className="post-preview">
                                    <h6 className="post-title">Todolists</h6>
                                    <p className="post-intro">Project uses React, Redux, Material UI, also use
                                        data from server</p>
                                    <a href="https://alexbeshketo.github.io/pizza/"><p className='gain-center'>Open</p></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
)


