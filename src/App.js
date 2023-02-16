import React from "react";
import './App.css';
import CandidateAddressComponent from './component/CandidateAddressComponent';

function App() {

    const items = [
        {
            addressId: "AAAAeQ-KjeE",
            kind: "address",
            createdDate: "2022-09-27T17:52:47.490Z",
            modifiedDate: "2022-09-27T21:08:41.424Z",
            streetNo:"213",
            prefixDirectional:"",
            streetName:"Example",
            suffixDirectional:"S",
            streetType:"Road",
            unitNumber:"11A",
            careOf:"John Smith",
            city: "Santa Fe",
            zip: "123345",
            state: "New Mexico"
        },
        {
            addressId: "KLDJ-234k",
            kind: "address",
            createdDate: "2022-09-27T17:52:47.490Z",
            modifiedDate: "2022-09-27T21:08:41.424Z",
            streetNo:"312",
            prefixDirectional:"N",
            streetName:"Sample",
            suffixDirectional:"",
            streetType:"Street",
            unitNumber:"7B",
            careOf:"Jane Doe",
            city: "Santa Fe",
            zip: "54321",
            state: "New Mexico"
        }
    ]

    return (
    <div className="App" style={{ justifyContent: 'center' }}>

        <div className="addressListComponent">
            <div className="addressListChildComponent">
                <h4 className="availableAddressTitle">Available Addresses</h4>
                {items.map((address) => (
                    <CandidateAddressComponent address={address}/>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
