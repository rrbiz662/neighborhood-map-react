import React from 'react';

class MapDisplay extends React.Component{
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div id="map" className="col-8">
                    Error loading map data.
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        );
    }
}

export default MapDisplay;