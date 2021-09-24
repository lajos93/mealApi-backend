import express from 'express';

const router = express.Router();

import axios from 'axios';

router.get('/:item', (req, res, next) => {
    axios
        .get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${req.params.item}`
        )
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});

export { router as dataRoutes };
