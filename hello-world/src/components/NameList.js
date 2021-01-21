import React from 'react';

// Creating a list of data. Iterate list using map() method
function NameList() {
    const players = [
        {
            id: 1,
            name: 'Michael',
           club: 'Chicago'
        },
        {
            id: 2,
            name: 'Shaq',
           club: 'Orlando'
        },
        {
            id: 3,
            name: 'Reggie',
           club: 'Indiana'
        },
    ]
    return <div>{
        players.map(player => <h2>{player.name} plays in {player.club}</h2>)
    }
    </div>
}

export default NameList;