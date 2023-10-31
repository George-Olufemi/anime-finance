import { CustomButton } from "../components/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";
import logo from "../assets/images/anime-logo.svg";
import Menu from "../assets/images/Menu.svg";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleregisterClick = () => {
    navigate("/register");
  };
  const handleloginClick = () => {
    navigate("/Login");
  };

  return (
    <nav className="bg-transparent md:p-4 overflow-hidden">
      <div className="md:flex justify-between items-center">
        <div className="md:flex items-center gap-3">
          <div className="cursor-pointer flex justify-between">
            <img src={logo} alt="" />
            <img
              className={`block md:hidden ${
                isDarkMode ? "white-Menu-icon" : ""
              }`}
              src={Menu}
              alt=""
            />
          </div>

          <div className="md:block hidden">
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p className="capitalize text-black dark:text-white font-medium cursor-pointer">
                Features
              </p>
            </Link>
          </div>

          <div className="md:block hidden">
            <Link
              to="chooseUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p className="capitalize text-black dark:text-white font-medium cursor-pointer">
                Benefits
              </p>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="md:block hidden">
            <button
              className="text-black dark:text-white text-sm px-2.5 py-2.5 rounded bg-[#EBEBEBEE] focus:outline-none"
              onClick={toggleTheme}
            >
              {isDarkMode ? "🌕" : "🌑"}
            </button>
          </div>
          <div className="md:block hidden">
            <CustomButton
              width="158px"
              content="Log In"
              onClick={handleloginClick}
            />
          </div>

          <div className="md:block hidden">
            <CustomButton
              width="158px"
              content="Get started"
              onClick={handleregisterClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;