import React from 'react';
import FoodDropdown from './FoodDropdown';
import { mealTypes, proteinTypes, beanTypes, riceTypes, salsaTypes, toppings, extras } from '../data.js';
import { meal } from '../types/types';

interface props {
    chipotleMeal: meal,
    setTeamMembers: any,
    member: any
}

const mapping: any = {
    base: mealTypes,
    protein: proteinTypes,
    bean: beanTypes,
    rice: riceTypes,
    salsa: salsaTypes,
    toppings: toppings,
    extras: extras
}

function DisplayMeal( { chipotleMeal, setTeamMembers, member }: props ) {

    return (
        <div className="flex flex-col w-full px-4 space-y-1">
            {Object.entries(chipotleMeal).map(([key, value], index) => {
                return (
                    <div key={index} className="flex justify-between border-b"> 
                        <FoodDropdown 
                            foodArr={mapping[key]} 
                            val={value?.name || "None"} 
                            setTeamMembers={setTeamMembers} 
                            member={member} 
                            foodType={key}
                        />
                        <span className="text-sm">${value?.cost || 0}</span> 
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayMeal