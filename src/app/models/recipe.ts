import { IIngredient } from "./ingredient";

export interface IRecipe{
    id: number;
    name: string;
    description: string;
    imagePath : string;
    ingredients: IIngredient[];
}
export class Recipe implements IRecipe{
    id: number;
    name: string;
    description: string;
    imagePath : string;
    ingredients: IIngredient[];
    
    constructor(id :number, name: string, description: string, imagePath: string, ingredients: IIngredient[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}