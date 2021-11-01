
import Service from "../Service/Service"
import'./Services.css'
const { useState, useEffect } = require("react")

const Services = () =>{
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return(
        <div className="services-container">
            {
                services.map(service => <Service
                key ={service.id}
                service ={service}
                ></Service>)
            }
        </div>
    )
}

export default Services;