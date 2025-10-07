import {spotify,crm,notes,ecom,html,native,reactpng,javascript,typescript,redux,next,css,mui,jquery,spring,redis,mysql,postgre,nodejs,api,express,mongodb,s3,vercel,netlify,gcp,aws,vscode,figma,postman,github,git,jira} from "../assets/Skills/SkillsExport"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';

export const menuItems = [
    {
        value : "skill",
        label : "Skills",
        link : "/skills"
    },
    {
        value : "experience",
        label : "Experience",
        link : "/experience"
    },
    {
        value : "home",
        label : "Home",
        link : "/"
    },
    {
        value : "projects",
        label : "Projects",
        link : "/projects"
    },
    {
        value : "about",
        label : "About",
        link : "/about"
    },
]
export const techMenu = [
    {
        value : "frontend",
        label : "Frontend",
    },
    {
        value : "backend",
        label : "Backend",
    },
    {
        value : "cloud",
        label : "Cloud",
    },
    {
        value : "tools",
        label : "Tools",
    }
]
export const frontendImages = [
    {
        label : "React",
        src : reactpng
    },
    {
        label : "Javascript",
        src : javascript
    },
    {
        label : "Typescript",
        src : typescript
    },
    {
        label : "Redux",
        src : redux
    },
    {
        label : "Next",
        src : next
    },
    {
        label : "React Native",
        src : native
    },
    // {
    //     label : "CSS",
    //     src : css
    // },
    // {
    //     label : "HTMl",
    //     src : html
    // },
    {
        label : "Material UI",
        src : mui
    },
    {
        label : "Jquery",
        src : jquery
    },
]
export const backendImages = [
    {
        label : "NodeJS",
        src : nodejs
    },
    {
        label : "ExpressJS",
        src : express
    },
    {
        label : "MongoDB",
        src : mongodb
    },
    {
        label : "MySQL",
        src : mysql
    },
    {
        label : "SpringBoot",
        src : spring
    },
    {
        label : "PostgreSQL",
        src : postgre
    },
    {
        label : "Redis",
        src : redis
    },
    {
        label : "Jquery",
        src : jquery
    },
]
export const cloudImages = [
    {
        label : "AWS",
        src : aws
    },
    {
        label : "Amazon S3",
        src : s3
    },
    {
        label : "Google Cloud",
        src : gcp
    },
    {
        label : "Vercel",
        src : vercel
    },
    {
        label : "Netlify",
        src : netlify
    }
]
export const toolsImage = [
    {
        label : "Github",
        src : github
    },
    {
        label : "Git",
        src : git
    },
    {
        label : "Postman",
        src : postman
    },
    {
        label : "Jira",
        src : jira
    },
    {
        label : "Figma",
        src : figma
    },
    {
        label : "VS Code",
        src : vscode
    }
]
export const projectDetails = [
    {
        name: "Spotify Clone",
        link: "https://harmony-music-hub.vercel.app/home",
        code: "https://github.com/Aishwarypatle/Spotify_Clone",
        desc: "Create a music streaming app akin to Spotify, featuring user authentication, music browsing, playback controls, playlist management, and user profiles. Aim for a functional prototype to showcase core functionalities.",
        image: spotify,
        tech:[ "React Native" ,"Redux" ,"Tailwind CSS", "Spotify API"],
        color: "#65c3c8"
    },
    {
        name: "E-Commerce Site",
        link: "/",
        code: "/",
        desc: " Develop a basic online shopping app offering user authentication, product browsing, cart management, checkout functionality, and user profiles.",
        image: ecom,
        tech: ["React ","Redux" ,"Material UI" ,"Tailwind CSS" ," Axios "],
        color: "#eeaf3a"
    },
    {
        name: "Sales CRM App",
        link: "/",
        code: "/",
        desc: "Develop a fundamental customer relationship management (CRM) application featuring user authentication, customer management, contact organization, task tracking, and reporting functionalitie.",
        image: crm,
        tech: ["React", "Redux", "OAuth", "Firebase", "Axios"],
        color: "#ef9fbc"
    },
    {
        name: "Notes App",
        link: "/",
        code: "/",
        desc: "Craft a straightforward note-taking application with features including user authentication, note creation, editing, deletion, and organization. Focus on simplicity and usability, ensuring seamless user experience for managing personal notes.",
        image: notes,
        tech: ["React ","ContextAPI ","Material UI" ,"Tailwind"],
        color: "#eeaf3a"
    },
]

export const SocialMenu = [
    {
        name:"Mail",
        link: "aishwarypatle26@gmail.com",
        icon: <MailOutlineIcon  fontSize='large' color='info' className='mx-2'/>
    },
    {
        name:"X(Twitter)",
        link: "https://x.com/AishwaryPatle",
        icon: <XIcon fontSize='large' color='info' className='mx-2'/>
    },
    {
        name:"Github",
        link: "https://github.com/aishwarypatle",
        icon: <GitHubIcon fontSize='large' color='info' className='mx-2'/>
    },
    {
        name:"Linkedin",
        link: "https://in.linkedin.com/in/aishwary-patle-1b13401a1",
        icon: <LinkedInIcon fontSize='large' color='info' className='mx-2'/>
    },
    {
        name:"Instagram",
        link: "https://www.instagram.com/aishwary.dev/",
        icon: <InstagramIcon fontSize='large' color='info' className='mx-2'/>
    },
]
