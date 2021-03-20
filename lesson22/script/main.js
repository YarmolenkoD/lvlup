$(function() {
  // Get Elements
  const todoInput = $('#todo-input')
  const todoList = $('#todo-task-list')
  const addTaskForm = $('#todo-add-elem-form')

  // Default data
  let todoTasks = [
    'Wake up',
    'Clean teeth',
    'Go to school',
  ]

  // Methods
  let deleteItem = function () {
    let parentEl = $(this).parent()
    parentEl.hide()
    let index = parentEl.data('index')

    todoTasks.splice(index, 1)
  }

  let renderElement = function (value, index) {
    let listItem = $('<li></li>')
    listItem.text(value)
    listItem.attr('data-index', index)
    listItem.addClass('list-item')

    let removeBtn = $('<span></span>')
    removeBtn.addClass('close')
    removeBtn.text('\u00D7')
    removeBtn.click(deleteItem)
    listItem.append(removeBtn)

    todoList.append(listItem)
  }

  let addElement = (value) => {
    todoTasks.push(value)

    renderElement(value, todoTasks.length - 1)
  }

  let inputValidation = function (value) {
    if (value.length < 3) return false

    return true
  }

  let resetInput = (input) => {
    $(input).val('')
  }

  let renderTasks = (tasks) => {
    tasks.forEach((item, index) => renderElement(item, index))
  }

  // Events handler
  addTaskForm.submit(function (event) {
    event.preventDefault()
    let inputValue = todoInput.val()
    let isValid = inputValidation(inputValue)

    if (isValid) {
      addElement(inputValue)
      resetInput(todoInput)
    }
  })

  // Display logic
  renderTasks(todoTasks)
});