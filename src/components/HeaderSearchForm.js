import React from 'react';
import Button from "./UI/Button";
import InputSearch from "./UI/InputSearch";


function HeaderSearchForm(props) {
    return (
        <form>
            <InputSearch type="text" placeholder={props.placeholder}/>
            <Button type="submit">Search</Button>
        </form>
    );
}

export default HeaderSearchForm;