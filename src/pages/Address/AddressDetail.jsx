import React from 'react';
import { useParams } from "react-router-dom";
function AddressDetail(props) {
    const {id} = useParams()
    return (
        <div>
            Address {id}
        </div>
    );
}

export default AddressDetail;