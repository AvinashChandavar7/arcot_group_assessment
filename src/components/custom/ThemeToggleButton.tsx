
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../app/store";
import { toggleTheme } from "../../features/themeSlice";



const ThemeToggleButton = () => {

  const dispatch = useDispatch();

  const darkMode = useSelector((state: RootState) => state.theme.darkMode)

  const handleToggle = () => dispatch(toggleTheme())

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <button className="px-4 py-2 my-5 bg-gray-200 border border-gray-600 rounded-full shadow-inner w-fit shadow-blue-500 dark:shadow-blue-500 dark:bg-transparent" onClick={handleToggle}>
      {darkMode
        ? <img src="/assets/moon.svg" alt="dark-moon" width={30} height={30} loading="lazy" />
        : <img src="/assets/sun.svg" alt="light-sun" width={30} height={30} loading="lazy" />
      }
    </button>
  )
}

export default ThemeToggleButton;
