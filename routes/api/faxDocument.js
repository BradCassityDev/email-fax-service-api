const router = require('express').Router();

// /api/v1/fax/:fax_number
router.post('/:fax_number', async (req, res) => {
    const { fax_number } = req.params;
    const 

    // Validate provided fax number
    //
    //
    //

    try {
        if(!req.files) {
            res.status(404).send({
                message: 'No file provided.'
            });
        } else {
            res.status(200).send({
                message: 'Fax initiated.'
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;