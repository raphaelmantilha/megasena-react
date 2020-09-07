import React from 'react'

export default function PickedNumbers({pickedNumbers}) {
    return (
        <div>
            <p>
                <strong>Números sorteados: </strong> {pickedNumbers.sort((a,b)=>a-b).join(' ')}
            </p>
        </div>
    )
}
