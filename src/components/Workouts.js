import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, FormControl } from 'react-bootstrap';
import './createpost.css';

const Workouts = () => {
    return (
        <div>
            <div class="child">  </div>
                <h4 className="" align = "center">Workout Summary</h4> 
                <div class="childhome">  </div>
            <div class="container mt-3">
           

        <table class="table">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Running</th>
                    <th>Biking</th>
                </tr>
            </thead>
    <tbody>   
     <tr class="table-warning">
        <td>Saturday</td>
        <td>Gentle Stretches</td>
        <td>10 PushUps</td>
      </tr>
      <tr class="table-primary">
        <td>Sunday</td>
        <td>Gentle Stretches</td>
        <td>5 Pushups</td>
      </tr>
      <tr class="table-success">
        <td> Monday </td>
        <td>30 mins Cadio of Choice</td>
        <td>5 Pushups</td>
      </tr>
      <tr class="table-danger">
        <td>Tuesday</td>
        <td>Cardio</td>
        <td>Gentle Stretches</td>
      </tr>
      <tr class="table-info">
        <td>Wednesday</td>
        <td>5 PushUps</td>
        <td>15mins Cadio </td>
      </tr>
      <tr class="table-warning">
        <td>Thursday</td>
        <td>HIIT Training</td>
        <td>30 mins Cadio of Choice</td>
      </tr> 
      <tr class="table-primary">
        <td>Friday</td>
        <td>Rest</td>
        <td>15 mins Cadio of Choice</td>
      </tr>
      <tr class="table-success">
        <td>Saturday</td>
        <td>HIIT Training</td>
        <td>Rest</td>
      </tr>
      <tr class="table-danger">
        <td>Sunday</td>
        <td>HIIT Training</td>
        <td>Rest</td>
      </tr>
      <tr class="table-info">
        <td>Monday</td>
        <td>HIIT Training</td>
        <td>Rest</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>HIIT Training</td>
        <td>Rest</td>
      </tr> 
      
      
    </tbody>
  </table>
</div>

        </div>
    )
}

export default Workouts
