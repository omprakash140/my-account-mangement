const express = require('express');
const Transcation = require('../service/transcation');
const app = express();
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const data = await Transcation.get();
        res.json(data);
    } catch (error) {
        res.json({ error: error })
    }
}).get('/:id', async (req, res) => {
    try {
        const data = await Transcation.get(req.params.id);
        res.json(data);
    } catch (error) {
        res.json({ error: error })
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.params);
        console.log(req.data);
        const data = await Transcation.add(req.body)
        res.json(data);
    } catch (error) {
        res.json({ error: error })
    }
}).put('/:id', async (req, res) => {
    try {
        const data  = await Transcation.update(req.params.id, req.body)
        res.json(data );
    } catch (error) {
        console.error(error);
        res.json({ error: error })
    }
}).delete('/:id', async (req, res) => {
    try {
        const data  = await Transcation.delete(req.params.id)
        res.json(data );
    } catch (error) {
        console.error(error);
        res.json({ error: error })
    }
})


module.exports = router;