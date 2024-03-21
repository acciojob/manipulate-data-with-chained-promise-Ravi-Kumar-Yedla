//your JS code here. If required.
function manipulateArray(arr) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(arr);
		},3000)
	});
	.then(arr=>{
		const oddNumbers = arr.filter(num => num%2 !==0);
		document.getElementById('output').innerHTML = `odd: ${oddNumbers}`;
		return arr.filter(num => num%2 ===0);
	})
	.then(arr=>{
		const evenNumbers = arr.map(num => num*2);
		document.getElementById('output').innerHTML = `multiplied for every even numbers: ${evenNumbers}`;
		
	});
}