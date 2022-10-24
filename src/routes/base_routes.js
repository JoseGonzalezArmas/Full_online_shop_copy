const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { res.render('products/all-products')});


// export the router
module.exports = router;