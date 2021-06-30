// FAQ functionality

const questions = document.querySelectorAll('.faq-card');
questions.forEach(ques => {
    ques.addEventListener('click', () => {
        ques.classList.toggle('active')
    })
})
