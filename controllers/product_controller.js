let express = require("express");
let router = express.Router();

router.get("/viewall", function(req, res){
    res.send("This is a practice route!")
})

module.exports = router;