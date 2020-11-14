import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaAmbulance } from "react-icons/fa";
import { NavigationService } from "./../Services/NavigationService";

export class NotFound extends React.Component
{
    private navigationService: NavigationService = new NavigationService();
    
    public render(): JSX.Element
    {
        return (
            <div style={{ textAlign: "center" }}>
                <Row>
                    <Col md={3}>
                        <FaAmbulance size={128}></FaAmbulance>
                    </Col>
                    <Col>
                        <h3>A 404 error has occurred!</h3>
                        <Button onClick={() => this.navigationService.goToDashboard()}>Back to Dashboard</Button>
                    </Col>
                </Row>
            </div>);
    }
}