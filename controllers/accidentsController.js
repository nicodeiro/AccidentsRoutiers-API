const mongoose = require('mongoose');

exports.getAccidents = async (req, res) => {
    try {
        const db = mongoose.connection.db;
        const accidents = await db.collection('accidents_routiers').find().limit(100).toArray();
        res.json(accidents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
