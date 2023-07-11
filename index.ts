// Add click event listener to button
const addCloseButtonEventListener = (button: Element): void => {
   button.addEventListener('click', () => {
      const li = button.parentElement;

      if (!li) return;

      li.style.display = 'none';
   });
};

// Create li element and add to list
const createChildListElement = (todoDesc: string): void => {
   const li = document.createElement('li');

   const textNode = document.createTextNode(todoDesc);
   li.appendChild(textNode);

   document.getElementById('myUL')?.appendChild(li);

   const span = document.createElement('SPAN');
   span.className = 'close';
   span.appendChild(document.createTextNode('\u00D7'));
   li.appendChild(span);

   addCloseButtonEventListener(span);
};

// "Add" button click handler
const addBtnClickHandler = (): void => {
   const input = document.getElementById('myInput') as HTMLInputElement;

   if (!input) return;

   const inputValue = input.value.trim();
   if (inputValue === '') {
      alert('You must write something!');
      return;
   }

   createChildListElement(inputValue);
   // Clear input element after li creation
   input.value = '';
};

// function perform HTML code manipulations
const initializeHTML = (): void => {
   const myNodelist = document.getElementsByTagName('LI');
   const closeButtons = document.getElementsByClassName('close');
   const list = document.querySelector('ul');
   const addBtn = document.getElementById('addBtn');

   addBtn?.addEventListener('click', addBtnClickHandler);

   Array.from(myNodelist).forEach(li => {
      const span = document.createElement('SPAN');
      span.className = 'close';
      span.appendChild(document.createTextNode('\u00D7'));
      li.appendChild(span);
      addCloseButtonEventListener(span);
   });

   list?.addEventListener('click', evt => {
      const target = evt.target as HTMLElement;
      if (!target) return;

      if (target.tagName === 'LI') {
         target.classList.toggle('checked');
      }
   });
};

initializeHTML();
