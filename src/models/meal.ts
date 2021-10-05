import { model, Schema, Model, Document } from 'mongoose';

export interface IMeal extends Document {
    searchWord: [string];
    result: { [key: string]: IMealResult }[];
}

export interface IMealResult extends Document {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags?: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strMeasure16: string;
    strMeasure17: string;
    strMeasure18: string;
    strMeasure19: string;
    strMeasure20: string;
    strSource: string;
    strImageSource?: string;
    strCreativeCommonsConfirmed?: string;
    dateModified?: string;
}

const MealSchema: Schema = new Schema({
    searchWord: { type: [] },
    result: [
        {
            _id: false,
            idMeal: Number,
            strMeal: String,
            strDrinkAlternate: String,
            strCategory: String,
            strArea: String,
            strInstructions: String,
            strMealThumb: String,
            strTags: String,
            strYoutube: String,
            strIngredient1: String,
            strIngredient2: String,
            strIngredient3: String,
            strIngredient4: String,
            strIngredient5: String,
            strIngredient6: String,
            strIngredient7: String,
            strIngredient8: String,
            strIngredient9: String,
            strIngredient10: String,
            strIngredient11: String,
            strIngredient12: String,
            strIngredient13: String,
            strIngredient14: String,
            strIngredient15: String,
            strIngredient16: String,
            strIngredient17: String,
            strIngredient18: String,
            strIngredient19: String,
            strIngredient20: String,
            strMeasure1: String,
            strMeasure2: String,
            strMeasure3: String,
            strMeasure4: String,
            strMeasure5: String,
            strMeasure6: String,
            strMeasure7: String,
            strMeasure8: String,
            strMeasure9: String,
            strMeasure10: String,
            strMeasure11: String,
            strMeasure12: String,
            strMeasure13: String,
            strMeasure14: String,
            strMeasure15: String,
            strMeasure16: String,
            strMeasure17: String,
            strMeasure18: String,
            strMeasure19: String,
            strMeasure20: String,
            strSource: String,
            strImageSource: String,
            strCreativeCommonsConfirmed: String,
            dateModified: String,
        },
    ],
});

export const Meal: Model<IMeal> = model('Meal', MealSchema);
