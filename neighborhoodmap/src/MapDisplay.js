import React from 'react';

class MapDisplay extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div id="front-spacer" className="col-2"></div>
                    <div id="map" className="col-8">
                    </div>
                    <div id="back-spacer" className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default MapDisplay;