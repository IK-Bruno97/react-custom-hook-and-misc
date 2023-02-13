import React from "react";

const peeks = [
    {name : "Freel", elevation: 10891},
    {name: "Monument", elevation: 10067}
];

function List({data, renderItem, renderEmpty}){
    return !data.lenght ? (renderEmpty) : (
        <ul> 
            { 
                data.map((item) => (
                    <li key={data.name}> {renderItem(item)} </li>
                )) 
            } 
        </ul>
    );
}

function App(){
    return(
        <List 
            data={peeks} 
            renderEmpty = {<p>This list is Empty.</p>}
            renderItem = {(item)=>(
                <>
                    {item.name} - {item.elevation}
                </>
            )}
        />

    );
}