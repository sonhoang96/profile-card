const camera = document.querySelector('.fa-camera-retro');
const container = document.querySelector('.container');
const avatarFullScreen = document.querySelector('.fullscreen-avatar');
const exitFullScreen = document.querySelector('.fa-times');
const setting = document.querySelector('.fa-cog');
const colorBoart = document.querySelector('.color-board');
const colorOptions = document.querySelectorAll('.color-option');
const socialMedia = document.querySelectorAll('i.fab');

function changeColor(){
	let gradient = this.getAttribute('gradient');
	let color = this.getAttribute('color');

	colorOptions.forEach( options => options.classList.remove('active'));
	this.classList.add('active');
	// add class active 

	document.documentElement.style.setProperty('--top-part', gradient);
	document.documentElement.style.setProperty('--text', color);
	//change gradient background and color of text
}

function changeActivity(){
	let num = document.querySelectorAll('.num');
	socialMedia.forEach( sm => sm.classList.remove('active'));
	this.classList.add('active');
	num.forEach(num => num.classList.add('adjust'));
	setTimeout(() =>{
		if(this.getAttribute('sm') === 'facebook'){
			num[0].innerText = 835;
			num[1].innerText = 533;
			num[2].innerText = '6.1k';
		}else if(this.getAttribute('sm') === 'instagram'){
			num[0].innerText = 678;
			num[1].innerText = 591;
			num[2].innerText = 242;
		}else if(this.getAttribute('sm') === 'youtube'){
			num[0].innerText = 103;
			num[1].innerText = 15;
			num[2].innerText = '7.02k';
		}else if(this.getAttribute('sm') === 'twitter'){
			num[0].innerText = 149;
			num[1].innerText = 100;
			num[2].innerText = 289;
		}else if(this.getAttribute('sm') === 'reddit'){
			num[0].innerText = 59;
			num[1].innerText = 70;
			num[2].innerText = 30;
		}
		num.forEach(num => num.classList.remove('adjust'));
	}, 500);
}
camera.addEventListener('click', function(){
	avatarFullScreen.classList.add('active');
	container.style.opacity = 0;
});
//active fullscreen avatar

exitFullScreen.addEventListener('click', function(){
	avatarFullScreen.classList.remove('active');
	container.style.opacity = 1;
});
// out fullscreen avatar and back to main board

setting.addEventListener('click',function(){
	colorBoart.classList.toggle('open');
	setting.classList.toggle('open');
});
//open color board

socialMedia.forEach( sm => sm.addEventListener('click', changeActivity));
colorOptions.forEach( options => options.addEventListener('click', changeColor));