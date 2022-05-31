import React from 'react';

function FoodDropdown({foodArr, val, setTeamMembers, member, foodType}: any) {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newest = foodArr.filter(food => {
            if (typeof food === 'object' && !Array.isArray(food)) {
                return food.name === e.target.value
            }
            else {
                return food === e.target.value
            }
        })[0]

        member.meal[foodType] = newest ? typeof newest === 'object' && !Array.isArray(newest) ? newest : {name: newest, cost: 0} : null

        setTeamMembers(prevMembers => {
            const updated = prevMembers.map(user => {
                if (user._id !== member.id) { return user }
                else {
                    user.meal[foodType] = typeof newest === 'object' && !Array.isArray(newest) ? newest : {name: newest, cost: 0}
                }
            })
            return updated
        })
    }
    
    return (
        <div>
            <select className="outline-none w-[150px] text-sm" value={val} onChange={handleChange}>
                {foodArr.map((item, index) => {
                    if (typeof item === 'object' && !Array.isArray(item)) {
                        return <option key={index} value={item.name}>{item.name}</option>
                    }
                    return <option key={index} value={item}>{item}</option>
                })}
                <option value="None">None</option>
            </select>
        </div>
    )
}

export default FoodDropdown