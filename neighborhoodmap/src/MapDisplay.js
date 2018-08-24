import React from 'react';
import Map from './Map'

class MapDisplay extends React.Component{   render(){
        return(
            <div className="container">
                <div className="row">
                    <div id="front-spacer" className="col-1"></div>
                    <div id="map" className="col-10">
                        <Map/>
                    </div>
                    <div id="back-spacer" className="col-1"></div>
                </div>
            </div>
        );
    }
}

export default MapDisplay;