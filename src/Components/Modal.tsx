import React from 'react';
import Confetti from 'react-confetti';

interface props {
    setTeamMembers: any,
    setOrderSubmitted: any,
    orderTotal: number
}

function Modal({setTeamMembers, setOrderSubmitted, orderTotal}: props) {

    const handleSubmit = () => {
        setTeamMembers([])
        setOrderSubmitted(false)
    }

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
            <Confetti 
                numberOfPieces={80}
            />
            <div className="z-20 w-[400px] h-[300px] bg-white p-4 rounded-md border flex flex-col justify-center items-center space-y-8">
                <div className="text-xl font-semibold">Order Has Been Submitted</div>
                <div className="space-x-4 text-lg font-semibold">
                    Order Total: ${orderTotal.toFixed(2)}
                </div>
                <button className="bg-blue-400 text-white px-4 py-0.5 rounded-sm" onClick={handleSubmit}>Start New Order</button>
            </div>
        </div>
    )
}

export default Modal