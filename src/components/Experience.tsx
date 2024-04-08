import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import styles from "../styles.ts"
import "react-vertical-timeline-component/style.min.css"
import { experiences } from "../constants"
import SectionWrapper from "../hoc/SectionWrapper.tsx"
import { textVariant } from "../utils/motion.ts"
import { ExperienceType } from "../model"

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => (
    <VerticalTimelineElement
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div>
                <img src={experience.icon} alt={experience.company_name} className={"w-[60%] h-[60%] object-contain"} />
            </div>
        }
    >
        <div>
            <h3 className={"text-white text-[24px] font-bold"}>{experience.title}</h3>
            <p className={"text-secondary text-[16px] m-0"}>{experience.company_name}</p>
        </div>
        <ul className={"mt-5 list-disc ml-5 space-y-2"}>
            {experience.points.map((point, index) => (
                <li key={`experience-point-${index}`} className={"text-white-100 text-[14px] pl-1 tracking-wider"}>
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)

const NaiveExperience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have do so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>
            <div className={"mt-20 flex flex-col"}>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

const Experience = SectionWrapper(NaiveExperience, "experience")

export default Experience
