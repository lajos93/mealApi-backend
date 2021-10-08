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

    const filter = {
        searchWord: req.body.searchWord,
        'result.strMeal': {
            $ne: req.body.mealData.strMeal,
        },
    };
    const update = { $push: { result: mealData } };

    Meal.findOneAndUpdate(
        filter,
        update,
        {
            returnOriginal: false,
        },
        function (err, foundMeal) {
            if (err) console.log({ error: err });
            if (foundMeal === null) {
                res.status(403).json({
                    errorCode: 403,
                    message: 'Name already exists',
                });
            }
            if (!err && foundMeal !== null) {
                console.log(foundMeal.result.length);
                res.json(foundMeal.result[foundMeal.result.length - 1]);
            }
        }
    );
});

router.put('/', (req, res) => {
    const filter = {
        searchWord: req.body.searchWord,
        'result.idMeal': req.body.mealData.idMeal,
    };

    const update = {
        $set: {
            'result.$[element].strMeal': req.body.mealData.strMeal,
        },
    };

    const options = {
        returnDocument: 'after',
        arrayFilters: [
            {
                'element.idMeal': req.body.mealData.idMeal,
            },
        ],
        projection: {
            result: {
                $elemMatch: { strMeal: req.body.mealData.strMeal },
            },
        },
    };

    Meal.findOneAndUpdate(
        filter,
        update,
        options,
        function (err: never, foundMeal: IMeal) {
            if (err) console.log({ error: err });
            if (foundMeal === null) {
                res.status(404).json({
                    errorCode: 404,
                    message: 'Meal not found',
                });
            }
            if (!err && foundMeal !== null) {
                res.json(foundMeal.result[0]);
            }
        }
    );
});

router.delete('/', (req, res) => {
    const filter = {
        searchWord: req.body.searchWord,
    };

    const update = {
        $pull: {
            result: { idMeal: req.body.mealData.idMeal },
        },
    };

    const options = {
        returnOriginal: false,
    };

    Meal.findOneAndUpdate(
        filter,
        update,
        options,
        function (err: never, foundMeal: IMeal) {
            if (err) console.log({ error: err });
            if (foundMeal === null) {
                res.status(404).json({
                    errorCode: 404,
                    message: 'Meal not found',
                });
            }
            if (!err && foundMeal !== null) {
                res.json(foundMeal.result);
            }
        }
    );
});

export { router as dataRoutes };
