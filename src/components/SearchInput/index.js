import {Component} from "react"
import {FaSearch} from "react-icons/fa"

import "./index.css"

class SearchInput extends Component{
    render(){
        return (
            <form className = "input-container">
                <input 
                    type = "text"
                    placeholder = "Search here"
                    className = "search-input"
                />
                <button className = "search-button"> 
                    <FaSearch className="search-icon"/>
                </button>
            </form>
        )
    }
}

export default SearchInput