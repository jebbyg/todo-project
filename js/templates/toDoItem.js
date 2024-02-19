/* 
     template is JSX  

     React Component 
     jsx + data
*/
import { toElement } from "./../utils/toElement";

function toDoItemTemplate(todo) {
  const template = `
  <section class="p-4 my-4 border-l-4 shadow-md rounded-md">
  <p class="text-xl font-bold">${todo.todo}</p>
  <div class="flex items-center gap-4 py-4">
  <p class="text-sm bg-indigo-600 px-2 rounded-full text-white">${todo.category}</p>
  <p class="text-sm text-slate-700 font-semibold">Due <span class="text-slate-400 font-normal">${todo.end}</span></p>
  </div>
  <p>${todo.status}</p>
</section>
    `;

  return toElement(template);
}

export { toDoItemTemplate };
