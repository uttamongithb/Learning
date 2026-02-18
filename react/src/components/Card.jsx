import { useState, useEffect } from "react"


const Card = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setData(data));



    }, [])
    return (
       <>



       
        <div className="mt-16 flex flex-wrap items-center justify-center my-5">
            {data.map(curele => (
                <div key={curele.id} className=" mt-2 ml-3 h-105 w-80 border">
                    <h3 className="m-2 font-bold text-xl">{curele.title.slice(0, 35)}</h3>
                    <div className="flex  justify-center ">
                        <img className="h-60" src={curele.image} alt='Image of ${curele.title}' />
                    </div>
                    <p className="m-2">{curele.description.slice(0, 65)}</p>
                    <p className="m-2 w-30 h-10 bg-black text-white text-center text-2xl font-bold">{`RS. ${curele.price}`}</p>


                </div>
            ))}
        </div></>
    )
}

export default Card