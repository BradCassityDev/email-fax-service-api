const router = require('express').Router();
const { sendFaxEmail } = require('../../controllers/email');

// /api/v1/fax/:faxNumber
router.post('/:faxNumber', async (req, res) => {
    const { faxNumber } = req.params;

    // Validate provided fax number
    //
    //
    //

    try {
        if(!req.files) {
            res.status(404).send({
                message: 'No file provided.',
                faxNumber
            });
        } else {
            let postedFile = req.files.file;

            console.log('Fax POST', {
                faxNumber,
                postedFile
            });

            // Move file to uploads folder
            await postedFile.mv(`./uploads/${postedFile.name}`, async function(err) {
                // Check if we got an error and return
                if(err) {
                    res.status(500).send(err);
                    return;
                }

                // Attempt sending fax as email
                const result = await sendFaxEmail(faxNumber, postedFile, 'Test subject', 'The message');

                // Verify we did not get an error
                    
                // Send response
                res.status(200).send({
                    message: 'Fax initiated.',
                    faxNumber
                });

            });

            
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;