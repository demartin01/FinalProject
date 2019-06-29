const db = require("../models");

module.exports = {
    getAllProperties: (req, res) => {
        db
            .Property
            .find(req.body)
            .then(dbProperties => {
                console.log("dbProperties: ", dbProperties);
                res.json(dbProperties);
            });
    }
}