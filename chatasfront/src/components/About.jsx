import React from 'react'

const About = () => {
    return (
        <>
            <div class="container-fluid">

                <hr class="divider" id="about"/>
                <h2 class="text-center mt-0">Nuestro Equipo</h2>
                <hr class="divider" />
                <section class="page-section bg-primary" >
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <p class="text-white-75 mb-4">
                        Somos un equipo multidiciplinario.<br />
                        A continuación conoce quienes somos y nuestro rol en el proyecto.
                        </p>
                    </div>
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-5 g-4">
                    <div class="col">
                    <div class="card">
                        <img
                        src="./assets/img/team/foto_Juan.jpeg"
                        class="card-img-top img-fluid"
                        alt="..."
                        />
                        <div class="card-body">
                        <h5 class="card-title">Juan Ardila<br /><i>Product Owner</i></h5>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                        <img
                        src="./assets/img/team/Foto_Henry.jpeg"
                        class="card-img-top"
                        alt="..."
                        />
                        <div class="card-body">
                        <h5 class="card-title">
                            Henry Velásquez<br /><i>Scrum Master</i>
                        </h5>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                        <img
                        src="./assets/img/team/912966.png"
                        class="card-img-top img-fluid rounded mx-auto d-block"
                        alt="..."
                        />
                        <div class="card-body">
                        <h5 class="card-title">
                            Stephanie Rodríguez<br /><i>Desarrolladora Frontend</i>
                        </h5>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                        <img
                        src="./assets/img/team/Foto_Julio.jpeg"
                        class="card-img-top"
                        alt="..."
                        />
                        <div class="card-body">
                        <h5 class="card-title">
                            Julio Díaz<br /><i>Desarrollador Backend</i>
                        </h5>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                        <img
                        src="./assets/img/team/FotoJorgeEquipo.jpg"
                        class="card-img-top"
                        alt="..."
                        />
                        <div class="card-body">
                        <h5 class="card-title">
                            Jorge Hernández<br /><i>Desarrollador Fullstack</i>
                        </h5>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        </>
    )
}

export default About
