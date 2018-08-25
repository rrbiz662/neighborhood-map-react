import React from "react"
import PropTypes from "prop-types"

class FilterList extends React.Component{
    static propTypes = {
        filterList: PropTypes.array,
        businessListToFilter: PropTypes.array,
        updateFilteredBusinesses: PropTypes.func
    }

    state = {
        selectValue: ""
    }

    handleSelect = (event) => {

        let filteredList = this.props.businessListToFilter.filter((business) => {
            let foundMatch = false;

            for (const category of business.categories) {
                if(category.title === event.target.value){
                    foundMatch = true;
                    break;
                }
            }

            if(foundMatch){
                foundMatch = false;
                return business;
            }
            else
                return null;
        });

        this.props.updateFilteredBusinesses(filteredList);

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