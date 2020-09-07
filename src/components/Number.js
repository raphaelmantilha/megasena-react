import React from 'react'

export default function Number({number, picked}) {
    const {description,count} = number;

    const {containerStyle, numberStyle, badgeContainerStyle, badgeStyle} = styles;

    const pickedStyle = picked ? {backgroundColor: '#81ecec'} : {};

    return (
        <div style={{...containerStyle, ...pickedStyle}}>
            <span style={numberStyle}>{description}</span>

            <div style={badgeContainerStyle}>
                <span style={badgeStyle}>{count}</span>
            </div>
            
        </div>
    );
}

const styles = {
    containerStyle:{
        border:'1px solid lightgray',
        borderRadius: '4px',
        padding:'5px',
        margin:'5px',

        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
       
        width:'80px'
    },

    numberStyle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginRight: '10px',
    },
    
    badgeContainerStyle: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '1px solid transparent',
        backgroundColor: '#c0392b',
    
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    badgeStyle: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: 'white',
    }
}
