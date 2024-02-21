//components/ShowCourseComponent.js
import React from 'react';

function ShowCourseComponent({ courses, 
	filterCourseFunction, 
	addCourseToCartFunction }) {
	return (
		<div className="product-list">
			{filterCourseFunction.length === 0 ? (
				<p className="no-results">
					மன்னிக்கவும், பொருத்தமான புத்தகம் எதுவும் கிடைக்கவில்லை.
				</p>
			) : (
				filterCourseFunction.map((product) => (
					<div className="product" key={product.id}>
						{product.image}
						<h2>{product.name}</h2>
                        <h3> Author:{product.author}</h3>
						<p>Price: ₹{product.price}</p>
						<button
							className="add-to-cart-button"
							onClick={() => addCourseToCartFunction(product)}
						>
							Add to Shopping Cart
						</button>
					</div>
				))
			)}
		</div>
	);
}

export default ShowCourseComponent;
