<script>
// javascript program to check if y is a perfect square

// A utility function that returns true if x is perfect square
function isPerfectSquare( y)
{
	let s = parseInt(Math.sqrt(y));
	return (s * s == y);
}

// Returns true if n is a Fibonacci Number, else false
function isFibonacci( m)
{

	// m is Fibonacci if one of 5*m*m + 4 or 5*m*m - 4 or both
	// is a perfect square
	return isPerfectSquare(5 * m * m + 4) ||
		isPerfectSquare(5 * m * m - 4);
}

// A utility function to test above functions
for (let i = 1; i <= 10; i++)
	isFibonacci(i)? document.write( i + " is a Fibonacci Number <br/>"):
					document.write(i + " is a not Fibonacci Number <br/>") ;
					
// Javascript Code for Fibonacci

</script>
