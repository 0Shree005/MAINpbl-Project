export default function Navbar () {
    return <nav className="nav">
        <a href="/" className="Site_Name">Literary Moisac</a>
        <ul>
            {/* <li>
                <a href="/vite-deploy-demo/home">home</a>
            </li> */}
            <li>
                <a href="/vite-deploy-demo/library">library</a>
            </li>
        </ul>
    </nav>
}