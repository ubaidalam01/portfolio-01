import { UserObject } from "@/app/models/User"
import { NavItems } from "@/app/models/Header"


export const userInfo:UserObject = {
    name : 'My Portfolio',
    pictures : '/Pictures/images/ManwithGlasses.webp',
    heading: "I'm a Web Developer specializing in HTML, CSS, JavaScript, and Tailwind CSS, currently expanding my expertise in Next.js to build dynamic and responsive web applications that enhance user experiences.",
about: `
        Hi, I'm Ubaid Alam, a passionate front-end developer specializing in HTML, CSS, JavaScript, and React, with a strong focus on Tailwind CSS for building modern, responsive user interfaces. I have a solid understanding of web development principles and enjoy creating visually appealing and user-friendly applications. My recent projects, including a resume project, have allowed me to enhance my skills in building interactive web experiences. I am eager to expand my knowledge and expertise in full-stack development and contribute to meaningful projects. Feel free to check out my work on GitHub!

        `,
    skills: ['Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'Typescript'],   
}



export const headerItems : NavItems = {
    home: { label : 'Home', page: 'home'},
    about: { label : 'About', page: 'about'},
    projects: { label : 'Projects', page: 'projects'},
    contact: { label : 'Contact', page: 'contact'}
}

export const projects = {
    todoApp: { image: 'https://i.ibb.co/0hzRX4n/thomas-bormans-pcps-Vsy-Fp-s-unsplash.jpg' },
    simpleCalculator: { image: 'https://i.ibb.co/gz5413B/roman-skrypnyk-DEga33-BYvm-A-unsplash.jpg' },
    Clock: { image: 'https://i.ibb.co/R7NdCYy/venkatesan-p-N7-HL-UBHUIQ-unsplash.jpg' },
    CurrencyConvertor: { image: 'https://i.ibb.co/18tT9G8/stock-birken-Xiw1-CCHSv-FE-unsplash.jpg' },
    Alarm: { image: 'https://i.ibb.co/yfXw008/indra-projects-RU5f-Jw-Lin-Kc-unsplash.jpg' }, 
}