import React from "react";

function DisplayWeakOverview(props) {
    const {data} = props;

    return (
        <div>
            <h3>Week Overview</h3>
            <p>{data[0].description}</p>
        </div>
    )
}

export default DisplayWeakOverview;