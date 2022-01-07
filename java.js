function toggle(id, im,qq) {
const a = document.getElementById(id);
const b=document.getElementById(im);
const q= document.getElementById(qq);
if(a.style.display == 'block'){
a.style.display = 'none';
b.style.transform='scaleY(1)';
q.style.fontWeight='400';
}
else{
a.style.display = 'block';
a.style.paddingTop='10px';
b.style.transform='scaleY(-1)';
q.style.fontWeight='700';
}
}


function changeIllusbox(){
	const ill= document.getElementById('illusbox');
	const main= document.getElementById('maincard');
	ill.style.left='11%';
	main.style.left='49%';
}

function revertback(){
	const ill= document.getElementById('illusbox');
	const main= document.getElementById('maincard');
	ill.style.left='13.7%';
	main.style.left='50%';

}