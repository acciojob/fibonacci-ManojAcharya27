function fibonacci(num) {
// your code here
	if(n<=2) return num;
	let first=0;
	let second=1;
	let ans=0;
	for(let i=2;i<=num;i++){
		ans=first+second;
		first=second;
		second=ans;
	}
	return ans;
}

module.exports = fibonacci;
