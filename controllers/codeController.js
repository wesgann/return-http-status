'use strict';

module.exports.processCode = async function (req, res, next) {
    let code = req.params.code;
    if ((code.length == 3 && parseInt(code))) {
        console.log(`Status ${code} returned.`);
        res.status(parseInt(code)).send({ success: true, error: null });
    } else {
        console.log(`Invalid status code of '${code}' requested.`)
        res.status(400).send({ success: false, error: 'Invalid code detected.' });
    }
}