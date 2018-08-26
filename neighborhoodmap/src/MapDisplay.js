import React from "react";
import PropTypes from "prop-types";
import Map from "./Map"

class MapDisplay extends React.Component {
    static propTypes = {
        location: PropTypes.string,
        businessList: PropTypes.array,
        filteredBusinessList: PropTypes.array
    }

    /**
     * @description Initializes component.
     * @param props The component properties.
     */
    constructor(props){
        super(props);
        this.frontColRef = React.createRef();
        this.mapColRef = React.createRef();
        this.backColRef = React.createRef();
    }


    /**
     * @description Handles the matched media query.
     * @param mediaQuery The media query.
     */
    handleMediaQuery = (mediaQuery) => {
        const frontCol = this.frontColRef.current;
        const mapCol = this.mapColRef.current.MapRef.current;
        const backCol = this.backColRef.current;


        if(mediaQuery.matches){
            frontCol.classList.remove("col-2");
            backCol.classList.remove("col-2");
            mapCol.classList.replace("col-8", "col-12");
        }
        else{
            frontCol.classList.add("col-2");
            backCol.classList.add("col-2");
            mapCol.classList.replace("col-12", "col-8");
        }
    }

    /**
     * @description Sets up component for media queries.
     */
    componentDidMount(){
        const query = window.matchMedia("(max-width: 550px)");
        this.handleMediaQuery(query);
        query.addListener(this.handleMediaQuery);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="front-spacer" ref={this.frontColRef} className="col-2"></div>
                    <Map
                        ref={this.mapColRef}
                        location={this.props.location}
                        businessList={this.props.businessList}
                        filteredBusinessList={this.props.filteredBusinessList}
                    />
                    <div id="back-spacer" ref={this.backColRef} className="col-2"></div>
                </div>
            </div>
        );
    }
}

export default MapDisplay;