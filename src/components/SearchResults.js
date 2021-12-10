import React from 'react'
import foo2 from '../../src/pro2.png';
import foo3 from '../../src/pro3.png';
import foo4 from '../../src/pro4.png';
import { Button } from 'react-bootstrap';


const SearchResults = () => {
    return (
        <div className="search-container ">
            <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
            crossorigin="anonymous"
            />
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="searchresult-profiles">
            <div class="card mb-3" style={{"max-width": "300px;"}}>
            <div class="row no-gutters">
            <div class="col-md-4">
                <a href="" class="btn btn-fix text-left">
                <img  src ={foo4} class="card-img" alt="Broken"/></a>
            </div>

            <div class="col-md-8">
                <div class="card-body">
                        <a href="" class="btn btn-fix text-left"> 
                        <h4 className="card-title"> Ned Stark  <span className="labelfloat">4.5 stars</span> </h4>
                        <p className="card-text">SFSU Campus</p>
                        <p className="card-text"> “All progress takes place outside the comfort zone.”</p>
                        <Button variant="primary">Profile</Button></a>
                </div>
            </div>
            </div>
            </div>
            <div class="card mb-3" style={{"max-width": "300px;"}}>
            <div class="row no-gutters">
            <div class="col-md-4">
                <a href="" class="btn btn-fix text-left">
                <img  src ={foo2} class="card-img" alt="Broken"/></a>
            </div>

            <div class="col-md-8">
                <div class="card-body">
                        <a href="" class="btn btn-fix text-left"> 
                        <h4 className="card-title"> Roose Bolton <span className="labelfloat">4.5 stars</span> </h4>
                        <p className="card-text">San Francisco</p>
                        <p className="card-text">“The pain you feel today, will be the strength you feel tomorrow.”</p>
                        <Button variant="primary">Profile</Button></a> 
                </div>
            </div>
            </div>
            </div>

            <div class="card mb-3" style={{"max-width": "300px;"}}>
            <div class="row no-gutters">
            <div class="col-md-4">
                <a href="" class="btn btn-fix text-left">
                <img  src ={foo3} class="card-img" alt="Broken"/></a>
            </div>

            <div class="col-md-8">
                <div class="card-body">
                        <a href="" class="btn btn-fix text-left"> 
                        <h4 className="card-title"> Bran Stark  <span className="labelfloat">4.5 stars</span> </h4>
                        <p className="card-text"> San Jose</p>
                        <p className="card-text">“A little progress each day adds up to big results”</p>
                        <Button variant="primary">Profile</Button></a>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        
    )
}

export default SearchResults
