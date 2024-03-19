import ThemeToggleButton from "./custom/ThemeToggleButton";

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0 flex items-center justify-between px-10 bg-blue-100 dark:bg-blue-900 ">
        <h1 className="text-4xl font-bold text-center">
          DashBoard
        </h1>

        <ThemeToggleButton />
      </div>
    </>
  )
}

export default NavBar;

