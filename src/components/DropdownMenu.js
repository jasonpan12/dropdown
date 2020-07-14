import React, {useContext} from "react";
import SearchContext from '../context/search-context';

const DropdownMenu = () => {
	const {inputText} = useContext(SearchContext);

	const seedData = ["car", "carnival", "apple", "applet"];
	const filteredData =  seedData.filter((word) => word.startsWith(inputText))

	return (
		<div>
			{
				inputText ?
				filteredData.map((result) => {
					return <p key={result}>{result}</p>
				}) :
					<p></p>
			}
		</div>
	)
}

export {DropdownMenu as default}
