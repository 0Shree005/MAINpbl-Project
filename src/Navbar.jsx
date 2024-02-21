import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar () {

    return (
    <nav className="nav">
        <Link to="/vite-deploy-demo/home" className="Site_Name">
            Literary Moisac
        </Link>
        <ul className="nav_link">
            <CustomLink to = "/vite-deploy-demo/home">Home</CustomLink>
            <CustomLink to = "/vite-deploy-demo/library">Library</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({to, children, ...props}){
    const ResolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: ResolvedPath.pathname, end: true})
    return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
            )
}