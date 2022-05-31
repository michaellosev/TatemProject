import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Receipt from './Components/Receipt';
import TeamMemberCard from './Components/TeamMemberCard';
import Confetti from 'react-confetti';
import { generateMeal } from './util/generateMeals'
import { TeamMember } from './types/types';
import Modal from './Components/Modal';

function App() {

    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string | null>();
    const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);
    const [orderTotal, setOrderTotal] = useState(0);

    const addUser = () => {
        if (name.length > 0) {
            setTeamMembers(prev => [...prev, { id: uuid(), name: name, meal: generateMeal() }])
            setName("")
            setError(null)
        }
        else {
            setError("Field cannot be empty")
        }
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (error && e.target.value.length > 0) {
            setError(null)
        }
        setName(e.target.value)
    }

    const deleteUser = (id: string) => {
        const otherUsers = teamMembers.filter(member => member.id !== id)
        setTeamMembers(otherUsers)
    }

    return (
        <div className="bg-gray-100 min-h-[100vh] flex flex-col">
            { orderSubmitted &&
                <div>
                    <Modal 
                        orderTotal={orderTotal} 
                        setTeamMembers={setTeamMembers}
                        setOrderSubmitted={setOrderSubmitted}
                    />
                    {/* <Confetti 
                        numberOfPieces={80}
                    /> */}
                </div>
            }
            <div className="flex items-center ml-8 mt-6">
                <div className="flex space-x-2">
                    <div className="flex">
                        <div className="flex space-x-2">
                            <label htmlFor="team">Add Team Members</label>
                            <div className="flex flex-col">
                                <input type="text" id="team" value={name} className="border border-gray-300 rounded-sm px-2 py-0.5" onChange={(e) => onInputChange(e)}/>
                                { error && <div className="text-red-400 text-sm">{error}</div> }
                            </div>
                        </div>
                    </div>
                    <button className="border px-4 py-0.5 bg-gray-200 font-semibold rounded-sm hover:bg-gray-100" onClick={addUser}>Add</button>
                </div>
                <div className="text-2xl font-light absolute left-1/2 -translate-x-1/2">Random Chiptole Generator</div>
            </div>
            <div className="p-4 flex">
                <div className="flex w-2/3 flex-wrap">
                    {teamMembers.map((member, index) => {
                        return (
                            <TeamMemberCard 
                                member={member} 
                                deleteUser={deleteUser} 
                                setTeamMembers={setTeamMembers}
                                key={index}
                            />
                        )
                    })}
                </div>
                <div className="w-1/3">
                    { teamMembers.length > 0 && 
                        <Receipt 
                            teamMembers={teamMembers} 
                            setOrderSubmitted={setOrderSubmitted} 
                            orderTotal={orderTotal} 
                            setOrderTotal={setOrderTotal}
                        /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default App
