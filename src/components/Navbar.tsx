import styles from "../styles.ts"
import { Link } from "react-router-dom"
import { useState } from "react"
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"
const Navbar = () => {
    const [activate, setActivate] = useState("")
    const [toggle, setToggle] = useState(false)
    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}>
            <div className={"w-full flex justify-between items-center max-w-7xl mx-auto"}>
                <Link
                    to={"/"}
                    className={"flex items-center gap-2"}
                    onClick={() => {
                        setActivate("")
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt={"logo"} className={"h-9 w-9 object-contain"} />
                    <p className={"text-white text-[18px] font-bold cursor-pointer flex"}>
                        Tropinone<span className={"sm:block hidden"}>&nbsp;| JavaScript Mastery</span>
                    </p>
                </Link>
                <ul className={"list-none hidden sm:flex flex-row gap-10"}>
                    {navLinks.map((item) => (
                        <li
                            key={item.id}
                            className={`${activate == item.title ? "text-white" : "text-secondary"} hover:text-cyan-200 text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActivate(item.title)}
                        >
                            <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                <div className={"sm:hidden flex flex-1 justify-end items-center"}>
                    <img
                        src={toggle ? close : menu}
                        alt={"menu"}
                        className={"w-[28px] h-[28px] object-contain cursor-pointer"}
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className={"list-none flex justify-end item-start flex-col gap-4"}>
                            {navLinks.map((item) => (
                                <li
                                    key={item.id}
                                    className={`${activate == item.title ? "text-white" : "text-secondary"} font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setActivate(item.title)
                                        setToggle(!toggle)
                                    }}
                                >
                                    <a href={`#${item.id}`}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
