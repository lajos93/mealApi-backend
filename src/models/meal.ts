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
            idMeal: { type: Number },
            strMeal: { type: String },
            strDrinkAlternate: { type: String },
            strCategory: { type: String },
            strArea: { type: String },
            strInstructions: { type: String },
            strMealThumb: { type: String },
            strTags: { type: String },
            strYoutube: { type: String },
            strIngredient1: { type: String, lowercase: true },
            strIngredient2: { type: String, lowercase: true },
            strIngredient3: { type: String, lowercase: true },
            strIngredient4: { type: String, lowercase: true },
            strIngredient5: { type: String, lowercase: true },
            strIngredient6: { type: String, lowercase: true },
            strIngredient7: { type: String, lowercase: true },
            strIngredient8: { type: String, lowercase: true },
            strIngredient9: { type: String, lowercase: true },
            strIngredient10: { type: String, lowercase: true },
            strIngredient11: { type: String, lowercase: true },
            strIngredient12: { type: String, lowercase: true },
            strIngredient13: { type: String, lowercase: true },
            strIngredient14: { type: String, lowercase: true },
            strIngredient15: { type: String, lowercase: true },
            strIngredient16: { type: String, lowercase: true },
            strIngredient17: { type: String, lowercase: true },
            strIngredient18: { type: String, lowercase: true },
            strIngredient19: { type: String, lowercase: true },
            strIngredient20: { type: String, lowercase: true },
            strMeasure1: { type: String, lowercase: true },
            strMeasure2: { type: String, lowercase: true },
            strMeasure3: { type: String, lowercase: true },
            strMeasure4: { type: String, lowercase: true },
            strMeasure5: { type: String, lowercase: true },
            strMeasure6: { type: String, lowercase: true },
            strMeasure7: { type: String, lowercase: true },
            strMeasure8: { type: String, lowercase: true },
            strMeasure9: { type: String, lowercase: true },
            strMeasure10: { type: String, lowercase: true },
            strMeasure11: { type: String, lowercase: true },
            strMeasure12: { type: String, lowercase: true },
            strMeasure13: { type: String, lowercase: true },
            strMeasure14: { type: String, lowercase: true },
            strMeasure15: { type: String, lowercase: true },
            strMeasure16: { type: String, lowercase: true },
            strMeasure17: { type: String, lowercase: true },
            strMeasure18: { type: String, lowercase: true },
            strMeasure19: { type: String, lowercase: true },
            strMeasure20: { type: String, lowercase: true },
            strSource: { type: String },
            strImageSource: { type: String },
            strCreativeCommonsConfirmed: { type: String },
            dateModified: { type: String },
        },
    ],
});

export const Meal: Model<IMeal> = model('Meal', MealSchema);
