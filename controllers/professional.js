const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
    try {
        const result = await mongodb.getDb().db().collection('user').find();
        result.toArray().then((lists) => {
            console.log('Data retrieved:', lists);
            res.setHeader('Content-Type', 'application/json');
            if (lists.length > 0) {
                res.status(200).json(lists[0]);
            } else {
                res.status(404).json({ message: 'No users found' });
            }
        });
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'Failed to fetch data' });
    }
};

module.exports = { getData };