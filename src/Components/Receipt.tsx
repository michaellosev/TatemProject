import React, { useEffect } from 'react'
import { TeamMember } from '../types/types';

interface props {
    teamMembers: TeamMember[],
    orderTotal: number,
    setOrderTotal: any,
    setOrderSubmitted: any
}

function Receipt({ teamMembers, setOrderSubmitted, setOrderTotal, orderTotal }: props) {

    useEffect(() => {
        const total = teamMembers.reduce((acc, member) => {
            acc += Object.entries(member.meal).reduce((accumulator, [key, val]) => {
                if (val) {
                    accumulator += val.cost
                }
                return accumulator
            }, 0)
            return acc
        }, 0)
        setOrderTotal(total)
    }, [teamMembers])

    return (
        <div className="w-[400px] bg-white ml-4 mt-4 flex flex-col items-center border border-gray-200 rounded-md shadow-md shadow-black/20 p-4 relative ">
            <div className="text-2xl font-bold mb-6">Order Receipt</div>
            { teamMembers.map((member, index) => {
                return (
                    <div key={index} className="w-full flex flex-col items-center space-y-2 mb-6">
                        <div className="tracking-wider flex justify-start w-[200px] -translate-x-8 uppercase text-xs font-bold">{member.name}</div>
                        <div className="w-[200px]">
                            {Object.entries(member.meal).map(([key, val], i) => {
                                if (val) {
                                    return (
                                        <div key={i} className="flex justify-between">
                                            <span className="text-sm">{val.name}</span>
                                            <span>${val.cost}</span>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                )
            })}
            <div className="flex justify-between items-center space-x-4 w-[200px] mb-6">
                <span className="text-lg font-bold">Total Cost</span>
                <span className="tracking-widest text-xl">${orderTotal.toFixed(2)}</span>
            </div>
            <button className="bg-blue-400 rounded-sm text-white px-4 py-0.5 mb-6" onClick={() => setOrderSubmitted(true)}>Submit Order</button>
        </div>
    )
}

export default Receipt