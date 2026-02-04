import { useState, useEffect } from "react"


const Fetchapi = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setData(data));



    }, [])
    return (
        <div>
            {data.map(curele => (
                <div key={curele.id}>
                    <h3>{curele.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Fetchapi