const db = require("../models/property");

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