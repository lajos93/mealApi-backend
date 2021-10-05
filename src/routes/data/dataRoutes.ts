import express from 'express';

const router = express.Router();

import axios from 'axios';
import { IMeal, IMealResult, Meal } from '../../models/meal';

router.get('/:item', (req, res) => {
    Meal.findOne(
        { searchWord: req.params.item },
        (err: string, foundMeal: IMeal) => {
            if (foundMeal) {
                return res.json(foundMeal.result);
            } else {
                axios
                    .get(
                        `https://www.themealdb.com/api/json/v1/1/search.php?s=${req.params.item}`
                    )
                    .then((response) => {
                        let meal;
                        if (response.data.meals) {
                            console.log(1);
                            meal = new Meal({
                                searchWord: req.params.item,
                                result: response.data.meals,
                            });
                        } else {
                            meal = new Meal({
                                searchWord: req.params.item,
                                result: [{ result: 'no data' }],
                            });
                        }
                        meal.save().then((savedMeal: IMeal) => {
                            if (savedMeal) {
                                Meal.findOneAndUpdate(
                                    {
                                        result: savedMeal.result,
                                        searchWord: {
                                            $ne: savedMeal.searchWord,
                                        },
                                    },
                                    {
                                        $push: {
                                            searchWord: savedMeal.searchWord,
                                        },
                                    },
                                    (
                                        updateError: string,
                                        updatedMeal: IMeal
                                    ) => {
                                        // const searchWords = foundMeal.map((a) => a.searchWord).toString();
                                        if (updatedMeal) {
                                            Meal.findOneAndDelete(
                                                {
                                                    searchWord:
                                                        savedMeal.searchWord,
                                                },
                                                (
                                                    deleteError: string,
                                                    deletedMeal: IMeal
                                                ) => {
                                                    if (deletedMeal)
                                                        return res.json(
                                                            updatedMeal.result
                                                        );
                                                    if (deleteError)
                                                        console.log(
                                                            deleteError
                                                        );
                                                }
                                            );
                                        } else {
                                            res.json(savedMeal.result);
                                        }
                                        if (updateError)
                                            console.log(updateError);
                                    }
                                );
                            }
                        });
                    })
                    .catch((error: string) => {
                        console.log(error);
                    });
            }
        }
    );
});

router.post('/', (req, res) => {
    const mealData: IMealResult = req.body.mealData;
    mealData.idMeal = Math.floor(
        Math.random() * (1000000 - 100000 + 1) + 100000
    ).toString();

    Meal.findOneAndUpdate(
        {
            searchWord: req.body.searchWord,
            'result.strMeal': {
                $ne: req.body.mealData.strMeal,
            },
        },

        { $push: { result: mealData } },
        (err: string, foundMeal: IMeal) => {
            if (err) console.log({ error: err });
            if (foundMeal === null) {
                res.status(403).json({
                    errorCode: 403,
                    message: 'Name already exists',
                });
            }
            if (!err && foundMeal !== null) res.json(foundMeal);
        }
    );
});

export { router as dataRoutes };
