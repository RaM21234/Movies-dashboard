import React, { useEffect, useState } from 'react'
import {
    Link
  } from "react-router-dom";

const Apidata = () => {
    const [show, setShow] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            let url = "https://api.tvmaze.com/search/shows?q=all";
            let response = await fetch(url);
            let responsedata = await response.json();
            setShow(responsedata);
            console.log(responsedata[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
  
        

    return (
        <>
            <div>

                <div >
                    {/* Render the fetched data */}
                    {show.map(item => (

                        <div key={item.show.id} className="row"  >
                            
                            <div className="card my-3 mx-3  col "  >
                                <img src={item.show.image.original} className="card-img-top" style={{height:'auto',width:'auto'}} alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.show.name}</h5>
                                        <p className="card-text">Genre : {item.show.genres[0]},{item.show.genres[1]}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Language : {item.show.language}</li>
                                        
                                        <li className="list-group-item">User rating : {item.show.rating.average}</li>
                                        <li className="list-group-item"> Status : {item.show.status}</li>
                                    </ul>
                                    <div className="card-body">
                                        <Link to="/booking" className="card-link">Show More</Link>
                                     
                                    </div>
                            </div>
                            <div className="col "></div>


                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Apidata
