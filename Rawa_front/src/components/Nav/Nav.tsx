import { useState } from "react";
import SearchIcon from "../../Icons/SearchIcon";
import { DarkMode } from "../DarkMode"
import {Link} from "react-router-dom"

const Nav = () => {

    const [isLogin, setIsLogin] = useState(false)

    return(
        <nav className="bg-priColor md:pr-20 md:pl-20 md:pt-4 md:pb-4 md:flex md:justify-between md:items-center">
            <Link to={"/"}>
                <div style={{width: "min-content"}} className="bg-white text-black pr-5 pl-5 pt-1 pb-1 rounded-2xl">
                    <h2 className="text-2xl font-moch">RAWA</h2>
                </div>
            </Link>
            <ul className="md:flex md:justify-between md:w-1/3 md:items-center">
                <SearchIcon/>
                <li className="text-white"><DarkMode/></li>
                <li className="text-white cursor-pointer font-moch">Language</li>
                {isLogin ? <li className="text-white font-moch">User</li> :
                <Link to={"/login"}>
                    <button className="text-white bg-gray-800 md:pt-3 md:pb-3 md:pl-10 md:pr-10
                    rounded-2xl font-moch
                    ">Login</button>
                </Link>
                }
            </ul>
        </nav>
    )
}

export default Nav;