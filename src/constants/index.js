import { meta, shopify, starbucks, tesla, BSC, GXO } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    php,
    oracle,
    java,
    python,
    tetris,
    inventory,
    chat,
    music,
    bank
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: oracle,
        name: "Oracle",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Better Safer Communities (Internship)",
        icon: BSC,
        iconBg: "#accbe1",
        date: "Aug 2021 - Oct 2021",
        points: [
            "Translated design mock-ups into interactive web pages using HTML, CSS, and JavaScript, resulting in visually appealing and user-friendly interfaces.",
            "Developed optimised front-end code and assets to improve website performance, load times, and overall responsiveness, resulting in a 20% increase in page speed.",
            "Conducted thorough testing and debugging of front-end code to identify and resolve issues related to functionality, performance, and compatibility, ensuring a seamless user experience.",
            "Facilitated regular code review sessions with supervisors to ensure adherence to best practices and maintain high code quality standards.",
            "Implemented PHP for the validation purposes to fortify the website's security measures, thereby enhancing its resilience against potential vulnerabilities.",
        ],
    },
    {
        title: "System Administrator",
        company_name: "GXO Logistics",
        icon: GXO,
        iconBg: "#ffffff",
        date: "Dec 2022 - Apr 2024",
        points: [
            "Developed user-friendly web applications, such as a barcode generator, utilising React.js and Microsoft Power Pages to streamline and enhance operational efficiency.",
            "Effectively manage a team of User Acceptance Testers, coordinating comprehensive testing activities to accommodate continuous improvement requests within the Warehouse Management System. This initiative resulted in a 20% improvement in KPI efficiency and generated around £1,7m in savings since October 2022.",
            "Utilised SQL and visual graphical software tools such as Tableau and iReport to generate informative system reports, providing valuable resources for decision-making and performance enhancement. This effort resulted in task automation, leading to approximately £90k monthly savings.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/DanFalcon225',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/daniilssokolovs/',
    }
];

export const projects = [
    {
        iconUrl: tetris,
        theme: 'btn-back-red',
        name: 'Tetris Game',
        description: 'Created a Tetris game as a web application using React and React Hooks. The game features full interactivity, allowing users to control tetrominoes with arrow key commands for movement and rotation. As players progress in the game, the difficulty level increases.',
        link: 'https://github.com/DanFalcon225/React_Tetris.git',
    },
    {
        iconUrl: inventory,
        theme: 'btn-back-green',
        name: 'Inventory Management System',
        description: 'Developed a full-stack web application serving as a dynamic inventory management system. This system enables users to perform CRUD operations on all data values, as well as track annual income progress and monitor low stock levels.',
        link: 'https://github.com/DanFalcon225/Inventory_Management_System.git',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-blue',
        name: 'Chat Application',
        description: 'Developed a full-stack chat application using Android Studio. This application enables users to create and customise their accounts, facilitating chat interactions between users. Special attention was given to security during the development process, with user data saved and encrypted on cloud-based storage.',
        link: 'https://github.com/DanFalcon225/ChatApp_AndroidStudio.git',
    },
    {
        iconUrl: music,
        theme: 'btn-back-pink',
        name: 'Youtube to MP3 converter',
        description: 'Built an application that enables users to convert YouTube videos to MP3 format and subsequently download them.',
        link: 'https://github.com/DanFalcon225/YouTube_2_MP3_converter.git',
    },
    {
        iconUrl: bank,
        theme: 'btn-back-black',
        name: 'Bank Application',
        description: 'Developed an application that enables users to fully manage their transactions. The application serves as a comprehensive showcase of fundamental principles of data manipulation, including sorting, searching, and selection.',
        link: 'https://github.com/DanFalcon225/Bank_Application.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Tutor Wizard',
        description: 'Tutor Wizard is a multi-purpose problem solving program designed for students who need assistance with the modules. Program aims to demonstrate a math and cyber security techniques viz: geometric function for math and encryption / decryption for cyber security.',
        link: 'https://github.com/DanFalcon225/TutorWizard.git',
    }
];