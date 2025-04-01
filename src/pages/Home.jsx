export default function Home() {
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
                                    <a class="nav-link active" href="#" aria-current="page">
                                        Home
                                        <span class="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <section>
                    <div class="p-5 mb-4 bg-light rounded-3">
                        <div class="container-fluid py-5">
                            <h1 class="display-5 fw-bold">REACT ROUTERS</h1>
                            <p class="col-md-8 fs-4">
                                Using a series of utilities, you can create this jumbotron, just
                                like the one in previous versions of Bootstrap. Check out the
                                examples below for how you can remix and restyle it to your liking.
                            </p>
                            <button class="btn btn-primary btn-lg" type="button">
                                Example button
                            </button>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                            <div className="col d-flex">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos excepturi odit magni perferendis obcaecati consectetur, vero non labore itaque atque.
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos excepturi odit magni perferendis obcaecati consectetur, vero non labore itaque atque.
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos excepturi odit magni perferendis obcaecati consectetur, vero non labore itaque atque.
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos excepturi odit magni perferendis obcaecati consectetur, vero non labore itaque atque.
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos excepturi odit magni perferendis obcaecati consectetur, vero non labore itaque atque.
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos excepturi odit magni perferendis obcaecati consectetur, vero non labore itaque atque.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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