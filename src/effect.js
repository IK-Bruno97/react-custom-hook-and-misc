import { useState } from "react";
import { useEffect } from "react";

function App(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);
        fetch(
            'https://api.github.com/users/IK-Bruno97'
        ) 
        .then( (res) => res.json())
        .then(setData)
        .then( () => setLoading(false))
        .catch(setError);
    }, []);

    if(loading) return <h1 className="App">loading...</h1>;
    if(error) return <pre>{JSON.stringify(error)}</pre>;
    if(!data) return null;
    return(
        <GithubUser name={data.name}
            location = {data.location}
            img ={data.avatar}
        />
    );
}