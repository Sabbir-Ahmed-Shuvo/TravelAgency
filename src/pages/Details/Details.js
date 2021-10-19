import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from "react"



const Details = () => {

    const [user, setUser] = useState([])

    const {serviceId} = useParams();
    useEffect ( () =>{
       fetch('/fakeData.json')
       .then(res => res.json())
       .then(data =>setUser(data) )
    },[])
    const exatItem = user.find(item => item.id == serviceId)
    console.log(exatItem)
    return (
        <div>
            <h2 className="mt-5">This is Details {serviceId}</h2>
        </div>
    );
};

export default Details;