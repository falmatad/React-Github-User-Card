import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    background-color: #24292e;
    text-align: center;
`
const SearchForm = (props) => {

return (
    <StyledForm onSubmit={props.getOtherUser}>
        <input
            type="text"
            value={props.searchedName}
            onChange={props.handleChanges}
        />
        <button>Search</button>
    </StyledForm>
)
}

export default SearchForm;