import { Link } from "react-router-dom";

import { headerLinks } from "../../../router";

export default function Header() {
    return(
        <header>
            <nav>
              {
                headerLinks.map((link, idx) => <Link key={link.id} to={link.to}>0{idx} {link.title.toUpperCase()}</Link>)
              }  
            </nav>
        </header>
    )
}