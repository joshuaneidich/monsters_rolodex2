import React from 'react';

import './card.styles.css';

export const Card = (props) => {
    const { monster, searchTerm } = props;
    const { name } = monster;
    console.log(name, monster, searchTerm)
    let highlightedStringParts = [];
    if (!searchTerm) {
        highlightedStringParts.push(<span>{name}</span>)
    } else {
        let currentOffset = 0;
        let finishedSearching = false
        while (!finishedSearching) {
            let indexPosition = name.indexOf(searchTerm, currentOffset);

            if (indexPosition !== currentOffset) {
                highlightedStringParts.push(<span>{name.slice(currentOffset, indexPosition)}</span>);
            }
            if (indexPosition === -1) {
                finishedSearching = true;

                highlightedStringParts.push(<span>{name.slice(currentOffset)}</span>);
            } else {
                currentOffset = indexPosition + searchTerm.length;
                if (currentOffset === name.length - 1) {
                    finishedSearching = true
                }
                highlightedStringParts.push(<span className="highlight">{searchTerm}</span>)
            }
        }
    }

    return (<div className="card-container">
        <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
        <h1>  {highlightedStringParts} </h1>
        <h2>{monster.email}</h2>
    </div>
    );
}

