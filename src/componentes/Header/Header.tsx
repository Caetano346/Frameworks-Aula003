import './Header.css'

function Header() {
    return(
        <header>
            <div className="logo">
                1022 B
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="http://">Home</a>
                    </li>
                    <li>
                        <a href="http://">Listagem</a>
                    </li>
                    <li>
                        <a href="http://">Informações</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header