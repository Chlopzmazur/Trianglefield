// scripts.js

var a = prompt('Enter the width of triangle base'),
	h = prompt('Enter the height of a triangle'),
	triangleArea = (a * h / 2);

/*alert('Field of this triangle = ' + triangleArea);

console.log('Triangle field with base: ' + a + ' and height: ' + h + ' is equal to: ' + triangleArea); */

getTriangleArea (a, h) {
	var a = prompt('Enter the width of triangle base');
		h = prompt('Enter the height of a triangle');
};

valueCheck (a, h) {

	if (a || h === 0) {
		alert ( 'your data is invalid!');
	}

	else if ( a || h > 0 ) {
    	return triangleArea;
};

};

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
	triangle2Area = getTriangleArea(5, 10);
	triangle3Area = getTriangleArea(6, 8);