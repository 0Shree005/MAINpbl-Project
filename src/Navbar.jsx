export default function Navbar () {
    const path = window.location.pathname
    return <nav className="nav">
        <a href="/vite-deploy-demo/home" className="Site_Name">Literary Moisac</a>
        <ul>
            <CustomLink href = "/vite-deploy-demo/home">Home</CustomLink>
            <CustomLink href = "/vite-deploy-demo/library">Library</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return ( 
            <li className={path === href ? "active" : ""}>
                <a href={href} {...props}>
                    {children}
                </a>
            </li>
            )
}