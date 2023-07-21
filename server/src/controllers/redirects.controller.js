const router = require('express').Router();
const {URLModel} = require('../models/url.model');

router.get('/:code', async (req, res) => {
    try {
        const { code } = req.params;
        const url = await URLModel.findOne({
            urlCode: code
        });
        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No URL Found');
        }

    }
    catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
});


module.exports = router;