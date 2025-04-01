import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav
                    class="navbar navbar-expand-sm navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand" href="#">LOGO</a>
                        <button
                            class="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavId">
                            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <NavLink class="nav-link active" to="/" aria-current="page">
                                        Home
                                        <span class="visually-hidden">(current)</span>
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/AboutUs">Chi Siamo</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/Posts">Posts</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}