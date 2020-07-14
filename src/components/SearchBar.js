import React, { useContext} from "react";
import SearchContext from "../context/search-context";

const SearchBar = () => {
	const {setInputText} = useContext(SearchContext);

	const onInputChange = (e) => {
		setInputText(e.target.value);
	}

	return (
		<div>
			<input type="text" onChange={onInputChange}/>
		</div>
	);
}

export {SearchBar as default};
