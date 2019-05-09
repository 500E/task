document.addEventListener('DOMContentLoaded', () => {
  const formElem = document.querySelector('.form')
  const tableElem = document.querySelector('.data-table')
  const tableRowElem = tableElem.querySelectorAll('.data-table__row')

  formElem.addEventListener('submit', (e) => {
    e.preventDefault()
    filterTable()
  })

  function filterTable() {
    let td
    let searchedValue = document.getElementById('search').value.toLowerCase()
    for (let i = 0; i < tableRowElem.length; i++) {
      td = tableRowElem[i].querySelector('.data-table__item')
      if (td) {
        tdValue = td.innerText.toLowerCase()
        if (tdValue.includes(searchedValue)) {
          tableRowElem[i].style.display = ''
        } else {
          tableRowElem[i].style.display = 'none'
        }
      }
    }
  }
})
