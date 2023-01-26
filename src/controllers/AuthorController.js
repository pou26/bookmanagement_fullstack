const AuthorModel = require("../models/AuthorModel")
module.exports = {
    createauthor: async (req, res) => {
        try {
            let checkunique = await AuthorModel.findOne({ phone: req.body.phone })
            if (checkunique) return res.status(400).send({ msg: "Mobile number Already exists!" })
            let checkunique_email = await AuthorModel.findOne({ email: req.body.email })
            if (checkunique_email) return res.status(400).send({ msg: "Email Address Already exists!" })
            let obj = { street: req.body.address, city: req.body.city, pincode: req.body.pincode, }
            req.body.address = obj

            let createUserdata = await AuthorModel.create(req.body)
            res.status(201).send({ data: createUserdata })
        }
        catch (error) {
            console.log(error.message)
            res.status(500).send({ status: false, message: error.message })
        }
    }
}