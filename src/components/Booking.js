import React, { useEffect, useState } from 'react'

const Booking = () => {


    const [num, setNum] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [ticket, setTicket] = useState('');
    const [movie, setMovie] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform further processing with the captured values
        console.log( num,email,city,date,ticket,movie);
        localStorage.setItem("number",num)
        localStorage.setItem("email",email)
        localStorage.setItem("city",city)
        localStorage.setItem("registration date",date)
        localStorage.setItem("no of ticket",ticket)
        localStorage.setItem("movie name ",movie)
       
    };


    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            let url = "https://api.tvmaze.com/search/shows?q=all";
            let response = await fetch(url);
            let responsedata = await response.json();
            setDetails(responsedata);
            console.log(responsedata[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }



    return (
        <div>
            {details.map((item) => (

                <div key={item.show.id}>


                    <div className="row g-0 bg-body-secondary position-relative my-2">
                        <div className="col-md-6 mb-md-0 p-md-4">
                            <img src={item.show.image.original} style={{ height: 'auto', width: '100%' }} alt="" />
                        </div>
                        <div className="col-md-6 p-4 ps-md-0 my-5">
                            <h1 className="mt-0">{item.show.name}</h1>
                            <div id="summary" className="container py-5">
                                {item.show.summary}
                            </div>
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="border border-0"><h1><span className=" badge bg-secondary ">BOOK A SHOW</span></h1></button>



                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">BOOK NOW</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address
                                                    </label>
                                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                                    <input type="text" className="form-control" id="phonenum" placeholder="1234567890" value={num} onChange={(event) => setNum(event.target.value)} required/>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Movie Name</label>
                                                    <input type="text" className="form-control" id="moviename" value={item.show.name} onChange={(event) => setMovie(item.show.name)} required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="city" placeholder="Bhopal"  value={city} onChange={(event) => setCity(event.target.value)} required/>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">No. of Tickets</label>
                                                    <input type="text" className="form-control" id="ticket" placeholder="2"  value={ticket} onChange={(event) => setTicket(event.target.value)} required/>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                                                    <input type="text" className="form-control" id="date" placeholder="01/01/2023"  value={date} onChange={(event) => setDate(event.target.value)} required/>
                                                </div>
                                            </form>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Book Show</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <a href="#" className="stretched-link">Go somewhere</a> */}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Booking
