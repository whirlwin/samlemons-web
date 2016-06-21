const express = require('express');

const router  = express.Router();

class IndexController {
}

router.get('/', (req, res) => {
    res.render('index');
});


module.exports = router;