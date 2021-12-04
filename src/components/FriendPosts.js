import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, FormControl } from 'react-bootstrap';
import foo from '../../src/pro1.png';
import foo2 from '../../src/pro2.png';
import foo3 from '../../src/pro3.png';
import foo4 from '../../src/pro4.png';
import foo5 from '../../src/pro5.png';
import foo6 from '../../src/pro6.png';


const FriendPosts = () => {
    return (
        
         <div class="card mb-3">     
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={foo} height={300} width = {350} />
                <Card.Body>
                    <Card.Title> Ned Stark </Card.Title>
                        <Card.Text>
                            “All progress takes place outside the comfort zone.”
                        </Card.Text>
                    <Button variant="primary">Go Profile</Button>
                </Card.Body>
        </Card>

       <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={foo2} height={300} width = {350}/>
                <Card.Body>
                    <Card.Title>Roose Bolton</Card.Title>
                        <Card.Text>
                        “The pain you feel today, will be the strength you feel tomorrow.”
                        </Card.Text>
                <Button variant="primary">Go Profile</Button>
            </Card.Body>
        </Card>

       <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={foo3} height={300} width = {350} />
            <Card.Body>
                <Card.Title>Bran Stark </Card.Title>
                    <Card.Text>
                    “A little progress each day adds up to big results”
                    </Card.Text>
                <Button variant="primary">Go Profile</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={foo4} height={300} width = {350} />
            <Card.Body>
                <Card.Title> Cersei Lannister </Card.Title>
                    <Card.Text>
                    “A one hour workout is 4% of your day. No excuses.”
                    </Card.Text>
                <Button variant="primary">Go Profile</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={foo5} height={300} width = {350} />
            <Card.Body>
                <Card.Title>Tywin Lannister </Card.Title>
                    <Card.Text>
                    “Rome wasn’t built in a day. Work hard, good results will come.”
                    </Card.Text>
                <Button variant="primary">Go Profile</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={foo6} height={300} width = {350} />
            <Card.Body>
                <Card.Title>Arya Stark </Card.Title>
                    <Card.Text>
                    “You are one workout away from a better mood”
                    </Card.Text>
                <Button variant="primary">Go Profile</Button>
            </Card.Body>
        </Card>
        </div>    
    )
}

export default FriendPosts


