import express from 'express';

const router = express.Router();

import { IMeal, Meal, IMealResult } from '../../models/meal';

router.get('/:cat', (req, res) => {
    const request = req.params.cat;
    const filter = {
        result: { $elemMatch: { strCategory: request } },
    };

    Meal.find(filter, function (err, foundMeals: IMeal[]) {
        if (err) {
            res.send(err);
        } else {
            const mealsArray: { [key: string]: IMealResult }[][] =
                foundMeals.map((item) => item.result);
            res.json(mealsArray.flat());
        }
    });
});

export { router as category };
