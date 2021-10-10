import express from 'express';

const router = express.Router();

import { IMeal, Meal, IMealResult } from '../../models/meal';

router.get('/:ingredient', (req, res) => {
    const request = req.params.ingredient.toLowerCase();
    const filter = {
        result: {
            $elemMatch: {
                $or: [
                    { strIngredient1: request },
                    { strIngredient2: request },
                    { strIngredient3: request },
                    { strIngredient4: request },
                    { strIngredient5: request },
                    { strIngredient6: request },
                    { strIngredient7: request },
                    { strIngredient8: request },
                    { strIngredient9: request },
                    { strIngredient10: request },
                    { strIngredient11: request },
                    { strIngredient12: request },
                    { strIngredient13: request },
                    { strIngredient14: request },
                    { strIngredient15: request },
                    { strIngredient16: request },
                    { strIngredient17: request },
                    { strIngredient18: request },
                    { strIngredient19: request },
                    { strIngredient20: request },
                ],
            },
        },
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

export { router as ingredient };
