const textarea = document.querySelector("#text")
const button = document.querySelector("#btn")

button.addEventListener("click", () => {

    window.speechSynthesis.cancel() //Parar qlq fala em andamento antes de iniciar uma nova

    const text = textarea.value // pega o valor digitado
    const speaks = new SpeechSynthesisUtterance(text)//Objeto que representa o texto que será falado
    speaks.lang = 'pt-BR'

    window.speechSynthesis.speak(speaks)// Inicia leitura do texto
} )

