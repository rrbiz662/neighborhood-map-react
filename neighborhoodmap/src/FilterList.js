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

    /**
     * @description Handles the list item selection. Filters business list accordingly.
     * @param event The triggered event.
     */
    handleSelect = (event) => {
        let selectedOption = event.target.value;

        // Display all businesses.
        if(selectedOption === "All"){
            this.props.updateFilteredBusinesses(this.props.businessListToFilter);
        }
        else{
            // Filter business list to selected category.
            let filteredList = this.props.businessListToFilter.filter((business) => {
                let foundMatch = false;

                for (const category of business.categories) {
                    if(category.title === selectedOption){
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
        }

        this.setState({
            selectValue: event.target.value
        });
    }

    render(){
        return(
            <div>
                <select  onChange={this.handleSelect} name="filter" id="filter" className="btn" aria-label="filter options">
                    <option value="All">All</option>
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