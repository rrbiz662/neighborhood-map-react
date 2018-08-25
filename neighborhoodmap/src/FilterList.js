import React from "react"
import PropTypes from "prop-types"

class FilterList extends React.Component{
    static propTypes = {
        filterList: PropTypes.array
    }

    state = {
        selectValue: ""
    }

    handleSelect = (event) => {
        this.setState({
            selectValue: event.target.value
        });
    }

    render(){
        return(
            <div>
                <select  onChange={this.handleSelect} name="filter" id="filter" className="btn">
                {
                    this.props.filterList.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
                </select>
            </div>
        );
    }
}

export default FilterList