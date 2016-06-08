const express = require('express');

const router  = express.Router();

class IndexController {
}

router.get('/', (req, res) => {
    res.send('foo bar baz');
});


module.exports = router;