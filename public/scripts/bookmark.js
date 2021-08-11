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

const printBM = () => {
	for(let iter=data.length;iter>0;--iter){
		let newBookmarkBtn = document.createElement('button');
		newBookmarkBtn.className = 'w-16 h-16 border-red-500 border text-center';
		newBookmarkBtn.innerHTML = data[iter-1].name;
		newBookmarkBtn.addEventListener('click',()=>{
					window.open(data[iter-1].url,'_blank','resizable=yes');
		});
		bookmarkBar.prepend(newBookmarkBtn);
	}
	
	
}

printBM();