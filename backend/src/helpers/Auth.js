const Auth = {}

const jwt = require('jsonwebtoken')


Auth.tokenVerify = (req, res, next) => {

    if(!req.headers.autorizacion){

        return res.status(401).json({

            mensaje:'No estas autorizado'

        })


    }

    const token = req.headers.autorizacion

    if(token==='null'){

        return res.status(401).json({

            mensaje:'No estas autorizado'

        })

    }

    jwt.verify(token,'Secreta',(error,decoded)=>{


        if(error) return res.status(401).json({

            mensaje:'No estas autorizado'
        })
        next()

    })

}

module.exports = Auth
