//components/SearchComponent.js
import React from 'react';

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
	return (
		<header className="App-header">
			<h1>புத்தகங்களைத் தேர்ந்தெடுக்கவும்</h1>
			<div className="search-bar">
				<input
					type="text"
					placeholder="புத்தகங்களைத் தேடுங்கள்"
					value={searchCourse}
					onChange={courseSearchUserFunction}
				/>
			</div>
		</header>
	);
}

export default SearchComponent;
