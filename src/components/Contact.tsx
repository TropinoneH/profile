import SectionWrapper from "../hoc/SectionWrapper.tsx"
import { motion } from "framer-motion"
import { slideIn } from "../utils/motion.ts"
import styles from "../styles.ts"
import { EarthCanvas } from "./canvas"

const NaiveContact = () => {
    return (
        <div className={"xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className={"flex-[0.75] bg-black-100 p-8 rounded-2xl"}
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <div className={"mt-12 flex flex-col gap-8 h-96"}>form</div>
            </motion.div>


            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className={"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"}
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

const Contact = SectionWrapper(NaiveContact, "contact")

export default Contact
