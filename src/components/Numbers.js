import React from 'react'
import Number from './Number';

export default function Numbers({numbers,pickedNumbers}) {
    const {containerStyle} = styles;

    return (
        <div className='center' style={containerStyle}>
            {numbers.map((number)=>{
                const {id} = number;

                const isPickedNumber = pickedNumbers.some((item) => item === number.value);
                
                return (
                    <div key={id}>
                        <Number number={number} picked={isPickedNumber} />
                    </div>
                );
            })}
        </div>
    );
}

const styles = {
    containerStyle:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        flexWrap:'wrap'
    }
};
