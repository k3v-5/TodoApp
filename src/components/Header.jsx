import { useEffect, useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";
const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    const refHeader = useRef(null);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            refHeader.current.classList.add("bg-gray-800");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            refHeader.current.classList.remove("bg-gray-800");
            localStorage.theme = "light";
        }
    }, [darkMode]);
    return (
        <header className="container mx-auto px-4 " ref={refHeader}>
            <div className="flex justify-between pt-8 text-3xl ">
                <h1 className="font-semibold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
