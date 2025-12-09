import React from 'react'
import {Card, Form, Button, FormGroup} from 'react-bootstrap';
const div = () => {
  return (
    <div>
      <div>
        <Card className="p-3">
            <h5>Serch</h5>
            <Form.Group className="mb-3">
             <Form.Label>Keyword</Form.Label>
             <Form.Control placeholder="Serch Keyword.."/>

            </Form.Group>
            <FormGroup className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control placeholder="Search Location"/>
            </FormGroup>

            <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Select>
                    <option >All</option>
                    <iption>Studio</iption>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>house</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Room</Form.Label>
                <Form.Control type="number" defaultValue={1}/>
            </Form.Group>
        </Card>
      </div>
    </div>
  )
}

export default div
