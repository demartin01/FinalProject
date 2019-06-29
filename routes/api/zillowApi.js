const router = require("express").Router();
const axios = require("axios");
const db = require("../../models");
const propertyController = require("../../controllers/propertyController");

// matches /api/properties
router.get("/:city/:state", function (req, res) {
    axios.get(`http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1h654yx46x7_8l13j&state=${req.params.state}&city=${req.params.city}`).then(response => {

        let dbData = response.data;
        let dbData1 = dbData.replace(/(.*count>)|(<\/list.*)|(<region>)|(<\/[a-z]*>)/g, "");
        let dbData2 = dbData1.replace("<", "");
        let dbData3 = dbData2.replace(/zindex currency="USD"/g, "value");
        let dbData4 = dbData3.split("<").join(">");
        let dbData5 = dbData4.split(">");
        let dbData6 = [];
        
        for (let i = 0; i < dbData5.length; i++) {
            var obj = { [dbData5[i]]: dbData5[(i + 1)], [dbData5[(i + 2)]]: dbData5[(i + 3)], [dbData5[(i + 4)]]: dbData5[(i + 5)], [dbData5[(i + 6)]]: dbData5[(i + 7)], [dbData5[(i + 8)]]: dbData5[(i + 9)], "zillowURL": `https://www.zillow.com/${req.params.city}-${req.params.state}/home-values/`,"googleMap":`https://www.google.com/maps/place/${dbData5[(i+7)]},${dbData5[(i+9)]}` }
            i = i + 9;
            dbData6.push(obj);
        }
        console.log("dbData6: ", dbData6);


        db.Property.create(dbData6);

        console.log(dbData6);
        res.json(dbData6)
    });
})

// matches /api/properties/all
router.route("/all")
    .get(propertyController.getAllProperties)
// .post(propertyController.createProperty);

module.exports = router;

