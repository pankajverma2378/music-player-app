import React, {Component} from 'react';
import './CountryForm.css';

class CountryForm extends Component {

    render() {
        return(
            <form onSubmit={this.props.getMusic} ref="country">
                <select name="selectCountry"  ref="country" className="drop-down">
                    <option value="india">India</option>
                    <option value="canada">Canada</option>
                    <option value="france">France</option>
                    <option value="china">China</option>
                    <option value="greece">Greece</option>
                    <option value="japan">Japan</option>
                </select>
                <button className="search-btn">Search</button>
            </form>
        );
    }
}

export default CountryForm;