let tasks = [
   {
      id: 0,
      title: 'Nowe Zadanie Nr. 1',
      state: 'Zrobiony',
      desc: 'Brak Opisu.'
   },
   {
      id: 1,
      title: 'Naprawić Formularz Logowania',
      state: 'W Trakcie',
      desc: 'Nie działa walidacja nazwy użytkownika i hasła.'
   },
   {
      id: 2,
      title: 'Napisać dynamiczne dodawanie zadań',
      state: 'Zrobiony',
      desc: 'Brak opisu.'
   },
];

let filterTasks = [];
let ID = 2;
let taskID = 0;

let body = document.querySelector('body');
let addButton = document.querySelector('.open-modal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.content__close')
let addModal = document.querySelector('.form__button');

let title = document.querySelector('.title__input');
let select = document.querySelector('select');
let taskDesc = document.querySelector('.task__textArea');
let wrapper = document.querySelector('.tasks');

let b0 = document.querySelector('#a');
let b1 = document.querySelector('#b');
let b2 = document.querySelector('#c');
let b3 = document.querySelector('#d');

addButton.addEventListener('click', () => {      
   modal.style.display = 'block';
   body.style.overflow = 'hidden';
})

closeModal.addEventListener('click', () => {
   modal.style.display = 'none';
   body.style.overflow = 'scroll';
})

addModal.addEventListener('click', () => {
   modal.style.display = 'none';
   body.style.overflow = 'scroll';
})

addModal.addEventListener('click', () => {
   event.preventDefault();

   ID++;
   let task = {};

   if(taskDesc.value === '') {
      task.desc = 'Brak Opisu.'
   } else {
      task.desc = taskDesc.value
   }

   task.id = ID;
   task.title = title.value;
   task.state = 'Nie zaczęty';
   
   tasks.push(task);

   loadData();
})

const loadData = () => {

   while(wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
   }

   tasks.map(currentElement => {
      let task = document.createElement('div');
      let taskTitle = document.createElement('div');
      let imgDel = document.createElement('img');
      let taskState = document.createElement('div');
      let taskDescription = document.createElement('div');

      task.setAttribute('class', 'task');
      taskTitle.setAttribute('class', 'task__title');
      imgDel.setAttribute('class','delete');
      imgDel.setAttribute('src', './delete.svg');
      imgDel.setAttribute('id', currentElement.id);
      taskState.setAttribute('class','task__state');
      taskDescription.setAttribute('class','task__desc');


      taskTitle.innerHTML = currentElement.title;
      taskState.innerHTML = currentElement.state;
      taskDescription.innerHTML = currentElement.desc;

      if(currentElement.state === 'W Trakcie') {
         taskState.style.color = 'orange';
      } else if (currentElement.state === 'Nie zaczęty'){
         taskState.style.color = 'red';
      } else {
         taskState.style.color = 'green';
      }

         
   
      wrapper.appendChild(task);
      task.appendChild(taskTitle);
      taskTitle.appendChild(imgDel);
      task.appendChild(taskState);
      task.appendChild(taskDescription);

      imgDel.addEventListener('click', () => {
         let ids, index; 
         
         ids = tasks.map(currentElement => {
            return currentElement.id;
         })

         index = ids.indexOf(currentElement.id); 

         if (index !== -1) {
            tasks.splice(index,1);
         }

         loadData();

      })

      
   })
}

loadData();

const showDone = () => {
   while(wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
   }

   let filter = tasks.filter(currentElement => currentElement.state === 'Zrobiony');

   filterTasks = filter;

   filterTasks.map(currentElement => {
      let task = document.createElement('div');
      let taskTitle = document.createElement('div');
      let imgDel = document.createElement('img');
      let taskState = document.createElement('div');
      let taskDescription = document.createElement('div');

      task.setAttribute('class', 'task');
      taskTitle.setAttribute('class', 'task__title');
      imgDel.setAttribute('class','delete');
      imgDel.setAttribute('src', './delete.svg');
      taskState.setAttribute('class','task__state');
      taskDescription.setAttribute('class','task__desc');

      taskTitle.innerHTML = currentElement.title;
      taskState.innerHTML = currentElement.state;
      taskDescription.innerHTML = currentElement.desc;

      if(currentElement.state === 'W Trakcie') {
         taskState.style.color = 'orange';
      } else if (currentElement.state === 'Nie zaczęty'){
         taskState.style.color = 'red';
      } else {
         taskState.style.color = 'green';
      }

   
      wrapper.appendChild(task);
      task.appendChild(taskTitle);
      taskTitle.appendChild(imgDel);
      task.appendChild(taskState);
      task.appendChild(taskDescription);

      imgDel.addEventListener('click', () => {
         let ids, index; 
         
         ids = tasks.map(currentElement => {
            return currentElement.id;
         })

         index = ids.indexOf(currentElement.id); 

         if (index !== -1) {
            tasks.splice(index,1);
         }

         showDone();

      })
   })
}

const showDoing = () => {
   while(wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
   }

   let filter = tasks.filter(currentElement => currentElement.state === 'W Trakcie');

   filterTasks = filter;

   filterTasks.map(currentElement => {
      let task = document.createElement('div');
      let taskTitle = document.createElement('div');
      let imgDel = document.createElement('img');
      let taskState = document.createElement('div');
      let taskDescription = document.createElement('div');

      task.setAttribute('class', 'task');
      taskTitle.setAttribute('class', 'task__title');
      imgDel.setAttribute('class','delete');
      imgDel.setAttribute('src', './delete.svg');
      taskState.setAttribute('class','task__state');
      taskDescription.setAttribute('class','task__desc');

      taskTitle.innerHTML = currentElement.title;
      taskState.innerHTML = currentElement.state;
      taskDescription.innerHTML = currentElement.desc;

      if(currentElement.state === 'W Trakcie') {
         taskState.style.color = 'orange';
      } else if (currentElement.state === 'Nie zaczęty'){
         taskState.style.color = 'red';
      } else {
         taskState.style.color = 'green';
      }

   
      wrapper.appendChild(task);
      task.appendChild(taskTitle);
      taskTitle.appendChild(imgDel);
      task.appendChild(taskState);
      task.appendChild(taskDescription);

      imgDel.addEventListener('click', () => {
         let ids, index; 
         
         ids = tasks.map(currentElement => {
            return currentElement.id;
         })

         index = ids.indexOf(currentElement.id); 

         if (index !== -1) {
            tasks.splice(index,1);
         }

         showDoing();

      })
   })
}

const showNotStart = () => {
   while(wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
   }

   let filter = tasks.filter(currentElement => currentElement.state === 'Nie zaczęty');

   filterTasks = filter;

   filterTasks.map(currentElement => {
      let task = document.createElement('div');
      let taskTitle = document.createElement('div');
      let imgDel = document.createElement('img');
      let taskState = document.createElement('div');
      let taskDescription = document.createElement('div');

      task.setAttribute('class', 'task');
      taskTitle.setAttribute('class', 'task__title');
      imgDel.setAttribute('class','delete');
      imgDel.setAttribute('src', './delete.svg');
      taskState.setAttribute('class','task__state');
      taskDescription.setAttribute('class','task__desc');

      taskTitle.innerHTML = currentElement.title;
      taskState.innerHTML = currentElement.state;
      taskDescription.innerHTML = currentElement.desc;

      if(currentElement.state === 'W Trakcie') {
         taskState.style.color = 'orange';
      } else if (currentElement.state === 'Nie zaczęty'){
         taskState.style.color = 'red';
      } else {
         taskState.style.color = 'green';
      }

   
      wrapper.appendChild(task);
      task.appendChild(taskTitle);
      taskTitle.appendChild(imgDel);
      task.appendChild(taskState);
      task.appendChild(taskDescription);

      imgDel.addEventListener('click', () => {
         let ids, index; 
         
         ids = tasks.map(currentElement => {
            return currentElement.id;
         })

         index = ids.indexOf(currentElement.id); 


         if (index !== -1) {
            tasks.splice(index,1);
         }

         showNotStart();

      })
   })
}

b0.addEventListener('click', () => {
   loadData();
})

b1.addEventListener('click', () => {
   showDone();
})

b2.addEventListener('click', () => {
   showDoing();
})

b3.addEventListener('click', () => {
   showNotStart();
})