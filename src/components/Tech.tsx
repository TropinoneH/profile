import { BallCanvas } from "./canvas"
import SectionWrapper from "../hoc/SectionWrapper.tsx"
import { technologies } from "../constants"

const NaiveTech = () => {
    return (
        <div className={"flex flex-row flex-wrap justify-center gap-10"}>
            {technologies.map((technology) => (
                <div className={"w-28 h-28"} key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                </div>
            ))}
        </div>
    )
}

const Tech = SectionWrapper(NaiveTech, "tech")

export default Tech
