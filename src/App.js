import './App.css';
import './css/default.css'
import {useEffect} from "react";
// import './css/blue.css'
// import './css/green.css'
import './css/purple.css'
import {ContactForm} from "./ContactForm/ContactForm";
import {Projects} from "./Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import {MainInfo} from "./MainInfo/MainInfo";


export default function App() {

    useEffect(() => {
        let theme = localStorage.getItem('theme')

        if (theme == null) {
            setTheme('light')
        } else {
            setTheme(theme)
        }

        let themeDots = document.getElementsByClassName('theme-dot')


        for (var i = 0; themeDots.length > i; i++) {
            themeDots[i].addEventListener('click', function () {
                let mode = this.dataset.mode
                console.log('Option clicked:', mode)
                setTheme(mode)
            })
        }

        function setTheme(mode) {
            if (mode === 'light') {
                document.getElementById('theme-style').href = '%PUBLIC_URL%/default.css'
                // import './css/default.css'
            }

            if (mode === 'blue') {
                document.getElementById('theme-style').href = '%PUBLIC_URL%/blue.css'
            }

            if (mode === 'green') {
                document.getElementById('theme-style').href = '%PUBLIC_URL%/green.css'
            }

            if (mode === 'purple') {
                document.getElementById('theme-style').href = '%PUBLIC_URL%/purple.css'
            }

            localStorage.setItem('theme', mode)
        }
    }, [])

    // const cls=

    // const onClick = (e) => {
    //     console.log()
    //     let mode = this.dataset.mode
    //     console.log('Option clicked:', mode)
    //     setTheme(mode)
    // }

    return (
        <>
            <MainInfo/>
            <AboutMe/>
            <Projects/>
            <ContactForm/>

        </>
    );
}


