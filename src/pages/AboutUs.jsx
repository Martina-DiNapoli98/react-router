export default function AboutUs() {
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
                                    <a class="nav-link active" href="/" aria-current="page">
                                        Home
                                        <span class="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/AboutUs">Chi Siamo</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Posts">Posts</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <footer className="m-4">
                <div className="container py-4">
                    <div className="row">
                        <div className="col">
                            LOGO

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio consequuntur incidunt eveniet assumenda vero debitis magnam iure sapiente nihil illo.</p>
                        </div>
                        <div className="col">
                            LOGO

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio consequuntur incidunt eveniet assumenda vero debitis magnam iure sapiente nihil illo.</p>
                        </div>
                        <div className="col">
                            <h3>Lorem</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="">contatti</a>
                                </li>
                                <li>
                                    <a href="">dicono di noi</a>
                                </li>
                                <li>
                                    <a href="">lavora con noi</a>
                                </li>
                                <li>
                                    <a href="">Chi siamo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}