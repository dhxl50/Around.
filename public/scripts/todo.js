let active = document.querySelector('.focus') && document.querySelector('.enter')
let todoCount = 0;

const main = document.querySelector('#todo-contents');
const input = main.querySelector('input');
const container = main.querySelector('#todo-list-container');
const todoBoxCSS = 'flex items-center justify-center flex-grow border-solid border-4 rounded-md p-3 m-3 mt-0';

function makeTodoBox(text){
	return `<p class="text-xl"> ${text} </p>
					<button class="h-6 w-6 ml-5">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 border-solid border-2 border-green-400 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
					</button>
			`;
}

function handleCheck(event){
	const target = event.target;
	const targetBox = target.closest('div');
	
	if(target.classList.contains('checked')){
		targetBox.classList.remove('bg-gray-300');
		target.classList.replace('text-indigo-400','text-green-400');
		target.classList.replace('border-indigo-400','border-green-400');
		target.classList.remove('checked');
	}
	else{	
		targetBox.classList.add('bg-gray-300');
		target.classList.replace('text-green-400','text-indigo-400');
		target.classList.replace('border-green-400','border-indigo-400');
		target.classList.add('checked');
	}
	

}

function handleEnter(evnet){
	if (event.keyCode === 13) {
		const TEXT = input.value;
		console.log(TEXT);
		if(TEXT!==''){
			const newTodoBox = document.createElement('div');
			newTodoBox.className = todoBoxCSS;
			newTodoBox.innerHTML = makeTodoBox(TEXT);
			newTodoBox.querySelector('button').addEventListener('click',handleCheck);
			container.appendChild(newTodoBox);
			++todoCount;
		}
		else{
			alert('할 일을 먼저 입력해주시기 바랍니다!')
		}
		
		input.value='';
  }
	return;
	
}

function init(){
	input.addEventListener("keydown", handleEnter);
}

init();