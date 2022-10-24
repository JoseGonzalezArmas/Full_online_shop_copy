const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { res.send('<h1>Hello World</h1>')});


// export the router
module.exports = router;