document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let list = document.querySelectorAll('#list');
  console.log(list);

  let input = document.querySelector('#new-task-description')
  let taskForm = document.querySelector('#create-task-form');

  console.log(taskForm);
  taskForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let list = document.querySelector('#tasks')
      let listContent = document.createElement('li')
      listContent.innerText = input.value
      // console.log(listContent)
      
      let deleteButton = document.createElement('button')
      deleteButton.innerText = 'x'

      list.appendChild(listContent);
      listContent.appendChild(deleteButton);
      taskForm.reset()


      // delete/remove task
      deleteButton.addEventListener('click', (e) => {
          listContent.remove();

      })


      //resets input form
      taskForm.reset()
  })



});
