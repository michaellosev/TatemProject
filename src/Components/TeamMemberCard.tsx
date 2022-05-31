import React from 'react';
import DisplayMeal from './DisplayMeal';
import { generateMeal } from '../util/generateMeals.js';

function TeamMemberCard({ member, deleteUser, setTeamMembers }: any) {

    const generateNewMeal = () => {
        setTeamMembers(prev => {
            return prev.map(user => {
                if (user.id !== member.id) {return user}
                else {
                    user.meal = generateMeal();
                    return user;
                }
            })
        })
    }

    return (
        <div className="bg-white w-[300px] h-[400px] ml-4 mt-4 flex flex-col items-center border border-gray-200 rounded-md shadow-md shadow-black/20 p-4 relative space-y-2">
            <div className="text-md tracking-wider uppercase mb-4">{member.name}</div>
            <DisplayMeal chipotleMeal={member.meal} setTeamMembers={setTeamMembers} member={member}/>
            <div className="absolute bottom-8 flex justify-center items-center space-x-4">
                <button className="bg-gray-200 px-4 py-0.5 rounded-sm text-sm border border-gray-300" onClick={generateNewMeal}>New Meal</button>
                <button className="text-black px-4 py-0.5 border border-red-300 bg-red-200 rounded-sm text-sm hover:text-red-400" onClick={() => deleteUser(member.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TeamMemberCard