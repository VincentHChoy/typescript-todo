const list = document.querySelector<HTMLUListElement>('#list');
const form = document.querySelector('#new-task-form') as HTMLFormElement;
const input = document.querySelector<HTMLInputElement>('#new-task-title');

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input?.value == '' || input?.value == null) return;

  const newTask = {
    id: '12345',
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  addListItem(newTask);
  input.value = '';
});

const addListItem = (task: Task) => {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');

  checkbox.type = 'checkbox';
  checkbox.checked = task.completed
  label.append(checkbox,task.title)
  item.append(label);
  list?.append(item);
  
};
