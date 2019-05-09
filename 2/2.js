document.addEventListener('DOMContentLoaded', () => {
  const modalElem = document.querySelector('.modal')
  const buttonElem = document.querySelector('.button')
  const buttonCloseElem = document.querySelector('.button--close')

  function toggleModal() {
    modalElem.classList.toggle('modal--open')
  }

  buttonElem.addEventListener('click', toggleModal)
  buttonCloseElem.addEventListener('click', toggleModal)
})
