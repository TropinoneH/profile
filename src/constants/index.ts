import {
    backend,
    courseBench,
    creator,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    notepad,
    reactjs,
    redux,
    shanghaitech,
    trash,
    tailwind,
    threejs,
    typescript,
    web
} from "../assets/index.ts"
import { ExperienceType, ProjectType, TestimonialType } from "../model"

export const navLinks = [
    {
        id: "about",
        title: "About"
    },
    {
        id: "work",
        title: "Work"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

const services = [
    {
        title: "Web Developer",
        icon: web
    },
    {
        title: "Python Developer",
        icon: backend
    },
    // {
    // title: "React Native Developer",
    // icon: mobile
    // },
    {
        title: "Content Creator",
        icon: creator
    }
]

const technologies = [
    {
        name: "HTML 5",
        icon: html
    },
    {
        name: "CSS 3",
        icon: css
    },
    {
        name: "JavaScript",
        icon: javascript
    },
    {
        name: "TypeScript",
        icon: typescript
    },
    {
        name: "React JS",
        icon: reactjs
    },
    {
        name: "Redux Toolkit",
        icon: redux
    },
    {
        name: "Tailwind CSS",
        icon: tailwind
    },
    {
        name: "Node JS",
        icon: nodejs
    },
    {
        name: "MongoDB",
        icon: mongodb
    },
    {
        name: "Three JS",
        icon: threejs
    },
    {
        name: "git",
        icon: git
    },
    {
        name: "figma",
        icon: figma
    },
    {
        name: "docker",
        icon: docker
    }
]

const experiences: ExperienceType[] = [
    {
        title: "Students in Shanghaitech",
        company_name: "Shanghaitech",
        icon: shanghaitech,
        iconBg: "#383E56",
        date: "Sep 2022 - Present",
        points: ["Studying in Shanghaitech", "A member of GeekPie", "Study in the lab"]
    }
]

const testimonials: TestimonialType[] = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg"
    }
]

const projects: ProjectType[] = [
    {
        name: "coursebench",
        description: "a website for students to search and review courses",
        tags: [
            {
                name: "vue",
                color: "blue-text-gradient"
            },
            {
                name: "vuetify",
                color: "pink-text-gradient"
            },
            {
                name: "scss",
                color: "green-text-gradient"
            }
        ],
        image: courseBench,
        source_code_link: "https://github.com/ShanghaitechGeekPie/coursebench-frontend"
    },
    {
        name: "Qt Notepad",
        description: "a simple notepad written in C++ with Qt framework",
        tags: [
            {
                name: "C++",
                color: "blue-text-gradient"
            },
            {
                name: "Qt",
                color: "pink-text-gradient"
            }
        ],
        image: notepad,
        source_code_link: "https://github.com/TropinoneH/QtNotepad"
    },
    {
        name: "zsh-trashz",
        description: "a zsh plugin to move files to trash",
        tags: [
            {
                name: "zsh",
                color: "blue-text-gradient"
            },
            {
                name: "shell",
                color: "pink-text-gradient"
            }
        ],
        image: trash,
        source_code_link: "https://github.com/TropinoneH/zsh-trashz"
    }
]

export { services, technologies, experiences, testimonials, projects }
