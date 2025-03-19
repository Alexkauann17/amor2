let animationTriggered = false;
          const threshold = 100; // Valor mínimo de scroll para disparar a animação
      
          function triggerAnimation() {
            if (!animationTriggered && window.scrollY > threshold) {
              animationTriggered = true;
              const container = document.querySelector('#duas-colunas');
              // Calcula a distância final dinamicamente com base na largura do container
              const finalTranslation = container.offsetWidth - 30; // 30 é a largura da joaninha
      
              // Animação dos elementos à esquerda: movem-se para a direita
              document.querySelectorAll('.wrapper.esquerda').forEach(wrapper => {
                wrapper.style.transform = `translateX(${finalTranslation}px)`;
                wrapper.addEventListener('transitionend', () => {
                  const joaninha = wrapper.querySelector('.joaninha');
                  if (joaninha && !joaninha.classList.contains('bounce')) {
                    joaninha.classList.add('bounce');
                  }
                });
              });
      
              // Animação dos elementos à direita: movem-se para a esquerda
              document.querySelectorAll('.wrapper.direita').forEach(wrapper => {
                wrapper.style.transform = `translateX(-${finalTranslation}px)`;
                wrapper.addEventListener('transitionend', () => {
                  const joaninha = wrapper.querySelector('.joaninha');
                  if (joaninha && !joaninha.classList.contains('bounce')) {
                    joaninha.classList.add('bounce');
                  }
                });
              });
            }
          }
      
          window.addEventListener('scroll', triggerAnimation);
          
          /*ANIMAÇÃO DOS CORAÇÕES*/
          document.addEventListener("DOMContentLoaded", function () {
  const lastSection = document.querySelector(".last-section");
  const heartsContainer = document.querySelector(".hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Entre 3s e 5s
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }

  function checkScroll() {
    const rect = lastSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const interval = setInterval(createHeart, 200);
      setTimeout(() => clearInterval(interval), 5000); // Duração do efeito
      window.removeEventListener("scroll", checkScroll);
    }
  }

  window.addEventListener("scroll", checkScroll);
});