import { model, Schema, Model, Document } from 'mongoose';

export interface IMeal extends Document {
    searchWord: [string];
    result: [];
}

const MealSchema: Schema = new Schema({
    searchWord: { type: [] },
    result: { type: [], required: true },
});

export const Meal: Model<IMeal> = model('Meal', MealSchema);
