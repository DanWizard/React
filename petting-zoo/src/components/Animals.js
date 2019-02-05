import React from 'react';
const Animal = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <hr/>
            <button onClick={() => props.onPetAnimal(props.name)}>{`Pet the ${props.name}`}</button>
        </div>
    )
}

export default Animal