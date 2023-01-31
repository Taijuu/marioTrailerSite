const botaoTrailer = document.querySelector("button.botao-trailer")

const modal = document.querySelector(".modal")

const botaoFecharModal = document.querySelector(".fechar-modal")

const video = document.querySelector("#video")

const linkVideo = video.src



botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
    video.setAttribute("src", linkVideo)
})

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
})


