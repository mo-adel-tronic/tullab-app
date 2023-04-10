// **********************
// Step 3
// **********************

// **************** Get Elements
const goalAdd     = document.getElementById('goalAdd')
const formGoals   = document.getElementById('formGoals')
const goalAddInput= document.getElementById('goalAddInput')
const stepsDev    = document.getElementsByClassName('step-points')[0]
const stepClass   = () => {
    let cls = null
    stepsDev.classList.forEach(val => {
        if(val.match(/step-\d+/)) {
            cls =  val
        }
    })
    return cls
}
const formData    = document.getElementsByClassName('form-data')[0]

// *************** Add Goal
goalAdd.onclick = function () {
    if(goalAddInput.value.trim() !== '') {
        formGoals.innerHTML += `
        <div class="input-group mb-3 goal">
            <input type="text" class="form-control" value="${goalAddInput.value}" readonly>
            <span class="input-group-text delete-data">
                <i class="fas fa-trash-alt"></i>
            </span>
        </div>
        `
        goalAddInput.value = ''
    }
}

// ************* Remove input
document.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete-data') ||
    e.target.parentElement.classList.contains('delete-data')) {
        e.target.closest('.goal').remove()
    }
})

// *********** Toggle Navigate
function goStep(num) {
    if(formData.children[0].classList.contains(stepClass())) {
        formData.children[0].classList.add('hide')
        formData.children[1].classList.remove('hide')
    }
    stepsDev.classList.remove(stepClass())
    stepsDev.classList.add('step-'+num)
}