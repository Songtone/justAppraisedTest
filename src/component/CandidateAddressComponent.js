import React, { useState } from "react";
import { Col, Row } from 'antd';
import './CandidateAddressComponent.css';

const CandidateAddressComponent = ({ address }) => {
    const [linkButton, setLinkButton] = useState("Associate");
    return (
            <div className="candidateAddressComponentStyle" >
                <Row className="rowStyle">
                    <Col span={12} className="addressId">{address.addressId}</Col>
                    {linkButton == 'Associate' && <Col span={12} className="rightColumnLinkButton">
                        <span onClick={() => setLinkButton("Revoke")}>Associate</span></Col>}
                    {linkButton == 'Revoke' && <Col span={12} className="rightColumnLinkButton">
                        <span onClick={() => setLinkButton("Associate")}>Revoke</span></Col>}
                </Row>
                <Row className="rowStyle">
                    <Col span={12} className="leftColumn">Street No.</Col>
                    <Col span={12} className="rightColumn">{address.streetNo}</Col>
                </Row>
                <Row className="rowStyle">
                    <Col span={12} className="leftColumn">Street Name</Col>
                    <Col span={12} className="rightColumn">{address.streetName}</Col>
                </Row>
                <Row className="rowStyle">
                    <Col span={12} className="leftColumn">Street Type</Col>
                    <Col span={12} className="rightColumn">{address.streetType}</Col>
                </Row>
                <Row className="rowStyle">
                    <Col span={12} className="leftColumn">City</Col>
                    <Col span={12} className="rightColumn">{address.city}</Col>
                </Row>
                <Row className="rowStyle">
                    <Col span={12} className="leftColumn">State</Col>
                    <Col span={12} className="rightColumn">{address.state}</Col>
                </Row>
                <Row className="rowStyle">
                    <Col span={12} className="leftColumn">Zip</Col>
                    <Col span={12} className="rightColumn">{address.zip}</Col>
                </Row>

            </div>
    )
}

export default CandidateAddressComponent;