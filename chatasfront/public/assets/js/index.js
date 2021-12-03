
const containerNews = Vue.createApp({
    data() {
        return {
            //Data de la novedad # 1
            tituloNovedad1: "Promoción del Día",
            imagenNovedad1: "./assets/img/novedades/31.jpg",
            nombreNovedad1: "Lomo Fino de Res | 500 g | $ 26.500",
            descripcionNovedad1: "Lo mejor de nuestro stock de carnes al más bajo precio para tu negocio, \
            tu placer o tus celebraciones.",
            linkNovedad1: "location.href = '#contact2';",
            //Data de la novedad # 2
            tituloNovedad2: "Novedad de la Semana",
            imagenNovedad2: "./assets/img/novedades/32.jpg",
            nombreNovedad2: "Filetes de Salmón | 4x6 oz | $ 139.500",
            descripcionNovedad2: "Las entradas más recientes a nuestro catálogo de proveedores nacionales y \
            extranjeros certificados.",
            linkNovedad2: "location.href = '#contact2';",
            //Data de la novedad # 3
            tituloNovedad3: "Receta del Día",
            imagenNovedad3: "./assets/img/novedades/33.jpg",
            nombreNovedad3: "Brochetas de Cerdo Caramelizado",
            descripcionNovedad3: "Nuestros chefs y maestros parrilleros invitados sorprenden cada día con \
            útiles tips y exquisitas preparaciones.",
            linkNovedad3: "location.href = 'https://bit.ly/3mgtzxq';",
            //Data de la novedad # 4
            tituloNovedad4: "Evento de la Semana",
            imagenNovedad4: "./assets/img/novedades/34.jpg",
            nombreNovedad4: "Feria del Atún Rojo «CartagenAsia»",
            descripcionNovedad4: "Chata's siempre presente en los pequeños y grandes acontecimientos del \
            mundo de la proteína animal.",
            linkNovedad4: "location.href = 'https://cartagenasia.es/calendario/';"
            // additional properties later
        }
    },
});

const containerBlog = Vue.createApp({
    data() {
        return {
            //Data de la llamada al blog
            imagenBlog1: "./assets/img/novedades/61.jpg",
            imagenBlog2: "./assets/img/novedades/62.jpg",
            imagenBlog3: "./assets/img/novedades/63.jpg",
            imagenBlog4: "./assets/img/novedades/64.jpg",
            imagenBlog5: "./assets/img/novedades/65.jpg",
            imagenBlog6: "./assets/img/novedades/66.jpg",
            imagenBlog7: "./assets/img/novedades/67.jpg",
            imagenBlog8: "./assets/img/novedades/68.jpg",
            descripcionBlog: "Disfruta las mejores preparaciones, recetas y recomendaciones gastronómicas \
            de nuestros maestros parrilleros,chefs, expertos y colaboradores.",            
            linkBlog: "https://www.carnevillamaria.com/blog/",
            botonBlog: "Visita nuestro blog invitado"
             // additional properties later
        }
    },
});

const containerContacto = Vue.createApp({
    data() {
        return {
            //Data del formulario de contacto
            tituloContacto: "Contáctanos",
            descripcionContacto: "¿Tienes alguna inquietud o sugerencia? ¿Necesitas más información acerca \
            de nuestros productos y/o procesos? Envíanos un mensaje y nos pondremos en contacto contigo.",   
            nombreContactoReq: "Nombre Completo",
            nombreContactoInv: "Se requiere ingresar un nombre.",
            emailContactoReq: "E-mail",
            emailContactoInv1: "Se requiere una dirección de e-mail.",            
            emailContactoInv2: "Dirección de e-mail inválida.",
            telefonoContactoReq: "Teléfono",
            telefonoContactoInv: "Se requiere ingresar un número de teléfono móvil o fijo en Colombia.",
            mensajeContactoReq: "Mensaje",
            mensajeContactoInv: "Se requiere ingresar un mensaje",
            formContactoSucess: "Envío de formulario exitoso. Una confirmación ha sido enviada al correo \
            registrado. Muy pronto le contestaremos.",
            formContactoError: "!Error al enviar el formulario! Por favor, intente de nuevo.",
            botonContactoEnv: "Enviar",
            phoneContactoInfo: "Haz tus pedidos: +57 (315) 546-0477"
            // additional properties later
        }
    },
});

const portfolioModal1 = Vue.createApp({
    data() {
        return {
            //Data de los modales de sección Novedades
            nombreModal1: "Lomo Fino de Res",
            datosModal1: "500 g | $26.500 COP",
            introModal1: "Corte madurado y empacado al vacío. Entrega inmediata",
            imagenModal1: "./assets/img/novedades/31a.jpg",
            titulo1Modal1: "Información Nutricional",
            descripcion1Modal1: "Cada porción de 100 gramos de este producto proporciona aproximadammente \
            169 calorias, de las cuales el 51% son proteína pura. No contiene carbohidratos.",
            titulo2Modal1: "Antes:",
            descripcion2Modal1: "$33.125 COP | -25%",
            titulo3Modal1: "Válida hasta:",
            descripcion3Modal1: "24/9/2021 | 11:59 PM"
            // additional properties later                    
        }
    },
});

const portfolioModal2 = Vue.createApp({
    data() {
        return {
            //Data de los modales de sección Novedades
            nombreModal2: "Filetes de Salmón de las Islas Feroe",
            datosModal2: "Paquete de 4 x 6 oz | $139.500 COP",
            introModal2: "Libre de transgénicos y antibióticos. Disponibilidad limitada. Entrega inmediata.",                    
            imagenModal2: "./assets/img/novedades/32a.jpg",
            titulo1Modal2: "Información Nutricional",
            descripcion1Modal2: "Cada porción de 100 gramos (3.2 oz) de este producto proporciona \
            aproximadamente 116 calorias, de las cuales el 72% son proteína pura. No contiene carbohidratos.",
            titulo2Modal2: "Proveedor:",
            descripcion2Modal2: "Rastelli Foods DTC (USA)",
            titulo3Modal2: "Importado por:",
            descripcion3Modal2: "Chata's Distribuidores Cárnicos"
            // additional properties later                    
        }
    },
});

const portfolioModal3 = Vue.createApp({
    data() {
        return {
            //Data de los modales de sección Novedades
            nombreModal3: "Brochetas de cerdo caramelizado con piña",
            datosModal3: "Receta para 4 personas | Nivel de dificultad: Fácil",
            introModal3: "Tiempo de preparación típico: 19 minutos",                    
            imagenModal3: "./assets/img/novedades/33a.jpg",
            titulo1Modal3: "Resumen",
            descripcion1Modal3: "«No os dejéis engañar por la pinta inocente de estas brochetas de carne \
            porque, sí, son caramelizadas, pero tienen un sabor potente y picante gracias a la salsa \
            Sriracha, un aderezo asiático a base de chile fermentado que no deja a nadie indiferente». E. C.",
            titulo2Modal3: "Chef Invitada:",
            descripcion2Modal3: "Ester Clemente (España)",
            titulo3Modal3: "Fecha de Publicación:",
            descripcion3Modal3: "23 de Julio de 2021"
            // additional properties later                    
        }
    },
});

const portfolioModal4 = Vue.createApp({
    data() {
        return {
            //Data de los modales de sección Novedades
            nombreModal4: "CartagenAsia 2021",
            datosModal4: "Chata's presente en la feria del atún rojo de acuicultura más importante de Europa.",                    
            introModal4: " Estableciendo alianzas estratégicas en la UE para traer a Colombia uno de los \
            productos más valorados y versátiles del mar.",
            imagenModal4: "./assets/img/novedades/34a.jpg",
            titulo1Modal4: "Resumen",
            descripcion1Modal4: "Cartagena, en la región de Murcia (España) es el principal productor de \
            atún rojo de la Unión Europea por la exclusividad de las especies que se pueden encontrar en \
            sus aguas. CartagenAsia es, además de un viaje gastronómico, el hermanamiento entre España y \
            Japón, el país invitado a esta importante feria y al cual se exporta el 70% del atún rojo de \
            Cartagena. Y ahora, gracias a nuestra alianza estrategica con el Grupo Ricardo Fuente e Hijos, \
            los colombianos podremos también disfrutar el sabor y los beneficios de esta famosa proteína \
            que ha conquistado los paladares más exigentes del mundo por su calidad y sabor.",
            titulo2Modal4: "Lugar y Fechas del Evento:",
            descripcion2Modal4: " Batel de Cartagena (Murcia, España), junto al Museo Nacional de \
            Arqueología Subacuática. | 16, 17, 18 y 19 de septiembre de 2021",
            titulo3Modal4: "Organiza:",
            descripcion3Modal4: "Apromar, la Asociación empresarial de Acuicultura de España."                    
            // additional properties later                    
        }
    },
});