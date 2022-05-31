import { mealTypes, proteinTypes, beanTypes, riceTypes, salsaTypes, toppings, extras } from '../data.js'

const getRandomIngredient = (ingredientList) => {
    const index = Math.floor(Math.random() * ingredientList.length)
    return ingredientList[index]
}

const shouldInlcudeIngredient = () => {
    const random = Math.random();
    return random > .5 ? true : false
}

export const generateMeal = () => {
    return {
        base: shouldInlcudeIngredient() ? {name: getRandomIngredient(mealTypes), cost: 0} : null,
        protein: getRandomIngredient(proteinTypes),
        bean: {name: getRandomIngredient(beanTypes), cost: 0},
        rice: {name: getRandomIngredient(riceTypes), cost: 0},
        salsa: shouldInlcudeIngredient() ? {name: getRandomIngredient(salsaTypes), cost: 0} : null,
        toppings: shouldInlcudeIngredient() ? {name: getRandomIngredient(toppings), cost: 0}: null,
        extras: shouldInlcudeIngredient() ? getRandomIngredient(extras) : null
    }
}