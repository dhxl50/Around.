const data = [
	{
		name: 'Github',
		url: 'https://www.github.com',
		isOpen: true,
		icon: 'link..',
	},
	{
		name: 'google',
		url: 'https://www.google.com',
		isOpen: false,
		icon: 'link..',
	},
	{
		name: 'goorm',
		url: 'https://www.goorm.io',
		isOpen: true,
		icon: 'link..',
	},
];


const bookmarkBar = document.querySelector('#bookmark-bar');
const addBtn = bookmarkBar.querySelector('#add-bookmark-button');
const addModal = document.querySelector('#add-bookmark-modal-container');
const submitBtn = bookmarkBar.querySelector('.submit-button');
const inputText = bookmarkBar.querySelectorAll('.text-input');

const bookmarkCSS = 'w-16 h-16 rounded-lg shadow-lg bg-indigo-500 text-center text-white font-semibold';

function handleSubmit(){
	const name = inputText[0].value;
	const url = inputText[1].value;
	
	const newBookmarkObj = {
		name: name,
		url: url,
		isOpen: true,
		icon: 'link..',
	}
	data.push(newBookmarkObj);
	addBookmarkBtn(name,"https://"+url);
}


function handleClose() {
	addModal.classList.add('hidden');
}

function handleAdd() {
	addModal.classList.remove('hidden');
}

function addBookmarkBtn(name, url) {
	let newBookmarkBtn = document.createElement('button');
	newBookmarkBtn.className = bookmarkCSS;
	newBookmarkBtn.innerHTML = name;
	newBookmarkBtn.addEventListener('click',()=>{
					window.open(url,'_blank','resizable=yes');
		});
	bookmarkBar.prepend(newBookmarkBtn);
}

function printBookmark () {
	for(let iter=data.length-1;iter>=0;--iter){
		addBookmarkBtn(data[iter].name, data[iter].url);
	}	
}


function init() {
	printBookmark();
	addBtn.addEventListener('click',handleAdd);
	submitBtn.addEventListener('click',handleSubmit);
}

init();