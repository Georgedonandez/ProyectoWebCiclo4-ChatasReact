import React from 'react'

const Footer = () => {
    return (
        <>
           <div class="container-fluid">
                <footer class="bg-light">
                <div class="row">
                    <div class="col-sm-3">
                    <div class="row">
                        <span class="text-center py-2"><strong>Afiliado a:</strong></span>
                    </div>
                    <div class="row">
                        <img
                        src="./assets/img/footer/ciculoDeSabores.png"
                        alt="Circulo De Sabores"
                        />
                    </div>
                    </div>

                    <div class="col-sm-1">
                    <img
                        src="./assets/img/footer/iconctec.png"
                        alt="icontec"
                        class="py-2"
                    />
                    </div>

                    <div class="col-sm-4">
                    <div class="row">
                        <img
                        src="./assets/img/chatas/chatas2.jpeg"
                        alt="chatas"
                        class="img-fluid rounded logo-footer"
                        />
                    </div>
                    <div class="row">
                        <span class="small text-center text-muted">
                        Copyright &copy; 2021 - Chata´s Distribuidores Cárnicos. Todos los
                        derechos reservados.
                        </span>
                    </div>
                    </div>

                    <div class="col-sm-1">
                    <div class="row">
                        <span class="text-galardon"><strong>Galardonado PREMIUM 2021 por ASOCARNES</strong></span>
                    </div>
                    <div class="row">
                        <img src="./assets/img/footer/galardon2.png" alt="galardon" class="img-fluid rounded galardon-footer"/>
                    </div>
                    </div>

                    <div class="col-sm-3">
                    <div class="row">
                        <div class="text-center">
                        <a href="/" class="col-sm-1 m-1"> <span class="text-primary"> <i class="bi bi-facebook fs-2"> </i> </span></a>
                        <a href="/" class="col-sm-1 m-1"> <span class="text-danger"> <i class="bi bi-youtube fs-2"> </i> </span></a>
                        <a href="/" class="col-sm-1 m-1"> <span class="text-warning"> <i class="bi bi-instagram fs-2"> </i> </span></a>
                        <a href="/" class="col-sm-1 m-1"> <span class="text-info"> <i class="bi bi-twitter fs-2"> </i> </span></a>
                        <a href="/" class="col-sm-1 m-1"> <span class="text-primary"> <i class="bi bi-linkedin fs-2"> </i> </span></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <p class="text-center"><strong>Contáctanos:</strong></p>
                        <p class="text-center">info@chatas.com</p>
                        <p class="text-center"><span class="text-success"><i class="bi bi-whatsapp"></i></span>+57 31198765438</p>
                        </div>
                        <div class="col">
                        <img src="./assets/img/footer/vaca2.png" alt=""/>
                        </div>
                    </div>
                    </div>
                
                </div>
                </footer>
            </div>  
        </>
    )
}

export default Footer
