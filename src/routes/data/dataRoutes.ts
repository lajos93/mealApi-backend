import express from 'express';

const router = express.Router();

import axios from 'axios';
import { IMeal, Meal } from '../../models/meal';

router.get('/:item', (req, res, next) => {
    Meal.findOne(
        { searchWord: req.params.item },
        (err: string, foundMeal: IMeal) => {
            if (foundMeal) {
                return res.json(foundMeal);
            } else {
                axios
                    .get(
                        `https://www.themealdb.com/api/json/v1/1/search.php?s=${req.params.item}`
                    )
                    .then((response) => {
                        console.log(response.data.meals);
                        const meal = new Meal({
                            searchWord: req.params.item,
                            result: response.data.meals,
                        });

                        if (!response.data.meals) {
                            return res.json({ data: 'Not found' });
                        }
                        meal.save().then((savedMeal: IMeal) => {
                            return res.json(savedMeal.result);
                        });
                    })
                    .catch((error: string) => {
                        console.log(error);
                    });
            }
        }
    );
});

export { router as dataRoutes };
