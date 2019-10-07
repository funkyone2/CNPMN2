/*
var btnOn = document.getElementById("btnOn");
var btnOff = document.getElementById("btnOff");
btnOn.addEventListener("click",()=>{
		$.ajax({
			url:"./PHP/on.php",
			type:"post"
		});
});
btnOff.addEventListener("click",()=>{
		$.ajax({
			url:'./PHP/off.php',
			type:'post'
		});
});
*/
$('#btnUp').on('click',()=>{
		$.ajax({
			url:"./PHP/up.php",
			type:"post"
		});
});

$('#btnDown').on('click',()=>{
		$.ajax({
			url:"./PHP/down.php",
			type:"post"
		});
});

$('#btnOff').on('click',()=>{
		$.ajax({
			url:"./PHP/off.php",
			type:"post"
		});
});