//App.js

import React, { useState } from 'react';
import './MainComponent.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
import Silapathikaram from './Silapathikaram.webp';
import manimegalai from './manimegalai.jpg';
import seevakasindamani from '../Book Shopping Cart/seevakasindamani.jpg';

function MainComponent() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'சிலப்பதிகாரம்', 
		price: 499, 
		image:<img src={Silapathikaram}alt='Silapathikaram image'></img>,
        author:'இளங்கோவடிகள்'
		},
		{ id: 2, 
		name: 'மணிமேகலை', 
		price: 699, 
		image: <img src={manimegalai} alt='Manimegalai image'></img>,
        author:' சீத்தலைச் சாத்தனார்'     
		},
		{ id: 3, 
		name: 'சீவக சிந்தாமணி', 
		price: 799, 
		image:<img src={seevakasindamani} alt='seevakasindamani image'></img>, 
        author:'திருத்தக்க தேவர்'    
		}
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default MainComponent;
