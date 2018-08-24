import React from "react"
import GoogleMapReact from "google-map-react"

class Map extends React.Component{
    static defaultProps = {
        center: {
            lat: 30.143347,
            lng: -97.833595
        },
        zoom: 6
    }

    render(){
        return(
            <GoogleMapReact
            bootstrapURLKeys={{
                key: "AIzaSyCpz3lEiM6sC23AMUOSJ6frxjjE95EXI50"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            </GoogleMapReact>
        );
    }
}

export default Map;