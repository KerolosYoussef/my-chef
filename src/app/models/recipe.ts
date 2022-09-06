
export interface IRecipe{
    name: string;
    description: string;
    imagePath : string;
}
export class Recipe implements IRecipe{
    name: string;
    description: string;
    imagePath : string;
    
    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}