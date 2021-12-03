import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
    return (  
    <form onSubmit={handleSubmit}>                    
      <>
        <div>
            <section className="page-section">
                <hr className="divider" id="contact2" />
                <h2 className="text-center mt-0">Contáctanos</h2>
                <hr className="divider" />
                <div className="container px-4 px-lg-5">
                      <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6 text-center">
                                <p className="text-muted mb-5">
                                ¿Tienes alguna inquietud o sugerencia? ¿Necesitas más información
                                acerca de nuestros productos y/o procesos? Envíanos un mensaje y
                                nos pondremos en contacto contigo lo antes posible.
                                </p>                                
                            </div>
                       </div>
                    
                        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                           <div className="col-lg-6">
                                
                                <div className="form-floating mb-3">                                            
                                    <input
                                    className="form-control"
                                    id="name" required
                                    type="text"
                                    placeholder="Enter your name..."
                                    data-sb-validations="required"
                                    />    
                                    <label htmlFor="name"><i className="bi bi-person-circle"></i> Nombre completo</label>                                
                                    
                                    <div className="invalid-feedback" data-sb-feedback="name:required">
                                    Se requiere un nombre.
                                    </div>                                    
                                                
                                </div>
                                                        
                                <div className="form-floating mb-3">
                                    <input
                                    className="form-control"
                                    id="email" required
                                    type="email"
                                    placeholder="name@example.com"
                                    data-sb-validations="required,email"
                                    />
                                    <label htmlFor="email"><i className="bi bi-envelope-fill"></i> Dirección de e-mail</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">
                                    Se requiere una dirección de e-mail.
                                    </div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">
                                    E-mail inválido.
                                    </div>
                                </div>                                
                                                                
                                <div className="form-floating mb-3">
                                    <input
                                    className="form-control"
                                    id="phone" required
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    data-sb-validations="required"
                                    />
                                    <label htmlFor="phone"><i className="bi bi-telephone-fill"></i> Teléfono de contacto</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">
                                    Se requiere un número de teléfono móvil o fijo en Colombia.
                                    </div>
                                </div>
                                                                    
                                <div className="form-floating mb-3">
                                    <textarea
                                    className="form-control"
                                    id="message" required
                                    type="text"
                                    placeholder="Enter your message here..."
                                    data-sb-validations="required"
                                    ></textarea>
                                    <label htmlFor="message"><i className="bi bi-pencil-square"></i> Mensaje</label>
                                    <div
                                    className="invalid-feedback"
                                    data-sb-feedback="message:required"
                                    >
                                    Se requiere un mensaje.
                                    </div>
                                </div>
                                                                    
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">
                                            Envío de formulario exitoso. Una confirmación ha sido
                                            enviada al correo registrado. Muy pronto le contestaremos.
                                        </div>
                                    </div>
                                </div>
                                                                    
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">
                                    Error al enviar el mensaje! Intente de nuevo.
                                    </div>
                                </div>
                                                                    
                                <div className="d-grid">    
                                    <button
                                    className="btn btn-primary btn-xl enabled"
                                    id="submitButton"
                                    type="submit"
                                    >
                                    {status}
                                    </button>
                                </div>                                
                                                             
                        </div>
                    </div>

                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-4 text-center mb-5 mb-lg-0">
                            <i className="bi-phone fs-2 mb-3 text-muted"></i>
                            <div>+57 315 546-0477
                            </div>
                        </div>
                    </div>  
                </div>                                     
            </section>
        </div>        
     </>        
    </form>
  );
};

export default ContactForm;