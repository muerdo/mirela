document.addEventListener('DOMContentLoaded', function() {
    // Criar o modal para visualização de imagens
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img class="modal-image" src="" alt="">
            <div class="modal-caption"></div>
            <div class="modal-navigation">
                <button class="modal-prev"><i class="fas fa-chevron-left"></i></button>
                <button class="modal-next"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Elementos do modal
    const modalImg = modal.querySelector('.modal-image');
    const modalCaption = modal.querySelector('.modal-caption');
    const closeBtn = modal.querySelector('.close-modal');
    const prevBtn = modal.querySelector('.modal-prev');
    const nextBtn = modal.querySelector('.modal-next');
    
    // Coleção de todas as imagens da galeria
    const galleryImages = document.querySelectorAll('.gallery img');
    let currentIndex = 0;
    
    // Adicionar evento de clique a todas as imagens da galeria
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalCaption.textContent = this.alt || '';
            currentIndex = index;
            updateNavigation();
        });
    });
    
    // Fechar o modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fechar o modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Navegação para a imagem anterior
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImg.src = galleryImages[currentIndex].src;
        modalCaption.textContent = galleryImages[currentIndex].alt || '';
        updateNavigation();
    });
    
    // Navegação para a próxima imagem
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        modalImg.src = galleryImages[currentIndex].src;
        modalCaption.textContent = galleryImages[currentIndex].alt || '';
        updateNavigation();
    });
    
    // Atualizar a visibilidade dos botões de navegação
    function updateNavigation() {
        prevBtn.style.display = galleryImages.length > 1 ? 'block' : 'none';
        nextBtn.style.display = galleryImages.length > 1 ? 'block' : 'none';
    }
    
    // Navegação com teclado
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            } else if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        }
    });
});
