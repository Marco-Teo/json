let nameArray =[]
const inputName = document.getElementById('name')
const saveButton = document.getElementById('save')
const deleateButton = document.getElementById('deleate')
const form = document.getElementById('name-form')



class Name {
    constructor(_name) {
      this.name = _name
    }
  }
saveButton.addEventListener('click', function (e) {
    e.preventDefault()
    const name = inputName.value 
    const nameSaved = new Name(name)
    console.log('nameSaved', nameSaved)
    nameArray.push(nameSaved)

    sessionStorage.setItem("name", JSON.stringify(nameArray));
    form.reset()
})

deleateButton.addEventListener('click', function () {
    if (nameArray.length > 0) {
        nameArray.pop();
        sessionStorage.removeItem("name")
    }
});