import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import styles from "../styles.ts"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion.ts"
import SectionWrapper from "../hoc/SectionWrapper.tsx"

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: string }) => {
    return (
        <Tilt className={"xs:w-[250px] w-full"}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className={"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"}
            >
                <div
                    className={
                        "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                    }
                >
                    <img src={icon} alt={"icon"} className={"w-16 h-16 object-contain"} />
                    <h3 className={"text-white text-[20px] font-bold text-center"}>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const NaiveAbout = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
            >
                I am currently an undergraduate student at ShanghaiTech University, proficient in a variety of
                programming languages including C/C++, Python, C#, Java, JavaScript, TypeScript, and Rust. My expertise
                extends to utilizing various frameworks such as Qt, FastAPI, Django, WinForms, Spring Boot, Vue.js,
                React, and Tauri. My current focus lies in the domains of computer vision and machine learning. With a
                rapid learning pace and a strong aptitude for collaborative work, I am eager to contribute to innovative
                projects and tackle challenging problems in the field.
            </motion.p>
            <div className={"mt-20 flex flex-wrap gap-10"}>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

const About = SectionWrapper(NaiveAbout, "about")

export default About
