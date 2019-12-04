import React from "react";

const SearchForm = (props) => {

return (
    <div>
    <form onSubmit={props.getOtherUser}>
        <input
            type="text"
            value={props.searchedName}
            onChange={props.handleChanges}
        />
        <button>Search</button>
    </form>
    </div>
)
}

export default SearchForm;