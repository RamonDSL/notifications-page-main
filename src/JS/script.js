const read = document.querySelector('.rigth')
const pendants = document.querySelectorAll('.pendant')
const number_read = document.querySelector('.number-read')

read.addEventListener('click', markAllAsRead)

for (const pendant of pendants) {
    pendant.addEventListener('click', () => {
        markAsRead(pendant)
    })
}

function markAsRead(pendant) {
    const unRead = pendant.querySelector('.read')
    
    let numberValue = Number(number_read.textContent)
    if (numberValue > 0 && pendant.classList.contains('pendant')) {
        number_read.innerHTML = numberValue -= 1
        pendant.classList.remove('pendant')
        unRead.style.display = 'none'
    }
}

function markAllAsRead() {
    for (const pendant of pendants) {
        const unRead = pendant.querySelector('.read')
        pendant.classList.remove('pendant')
        unRead.style.display = 'none'
    }
    
    number_read.innerHTML = 0
}