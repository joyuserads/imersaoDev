document.addEventListener('DOMContentLoaded', () => {
    // Seleciona a imagem principal
    const mainCup = document.querySelector('.main-cup');
    // Seleciona todas as miniaturas
    const thumbs = document.querySelectorAll('.thumb');
    // Seleciona o corpo do documento para mudar o tema
    const body = document.body;

    // Adiciona um ouvinte de evento de clique a cada miniatura
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', (event) => {
            // Obtém o atributo 'src' da miniatura clicada
            const newImageSrc = event.target.src;

            // Altera a imagem principal para a imagem da miniatura clicada
            mainCup.src = newImageSrc.replace('thumb', 'img'); // Ajusta o caminho da imagem para a versão maior

            // Determina o tema com base na imagem clicada
            // Você pode ajustar a lógica aqui para corresponder aos seus nomes de arquivo
            let themeClass = '';
            if (newImageSrc.includes('thumb1')) {
                themeClass = 'theme-green';
            } else if (newImageSrc.includes('thumb2')) {
                themeClass = 'theme-pink';
            } else if (newImageSrc.includes('thumb3')) {
                themeClass = 'theme-purple';
            }

            // Remove todas as classes de tema existentes do corpo
            body.classList.remove('theme-green', 'theme-pink', 'theme-purple');
            // Adiciona a nova classe de tema ao corpo
            if (themeClass) {
                body.classList.add(themeClass);
            }
        });
    });
});