/**
 * ==========================================================================
 * PORTFÓLIO PESSOAL - GIOVANNA GOMES DE FREITAS
 * Especialidade: Audiovisual • Edição de Vídeo • Fotografia • Produção
 * JavaScript Puro (Vanilla JS ES6+)
 * 
 * Funcionalidades:
 * 1. Menu Mobile Acessível (com ARIA e teclado Escape)
 * 2. Header Dinâmico com efeito de rolagem
 * 3. Rolagem Suave para links internos
 * 4. Filtro de Categorias da Galeria Audiovisual
 * 5. Validação de Formulário com Mensagens Acessíveis
 * 6. Animações Discretas ao Rolar (IntersectionObserver)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. MENU MOBILE RESPONSIVO E ACESSÍVEL
     ------------------------------------------------------------------------ */
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta');

  if (mobileToggle && navMenu) {
    const toggleMenu = (shouldOpen) => {
      navMenu.classList.toggle('is-active', shouldOpen);
      mobileToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      mobileToggle.setAttribute('aria-label', shouldOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      toggleMenu(!isExpanded);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-active')) {
          toggleMenu(false);
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
        toggleMenu(false);
        mobileToggle.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('is-active') &&
        !navMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. ESTILO DINÂMICO DO CABEÇALHO AO ROLAR (SCROLL EFFECT)
     ------------------------------------------------------------------------ */
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ------------------------------------------------------------------------
     3. ROLAGEM SUAVE (SMOOTH SCROLL)
     ------------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Foco acessível no destino sem quebrar a navegação
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });

        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  /* ------------------------------------------------------------------------
     4. FILTRO DE CATEGORIAS DA GALERIA AUDIOVISUAL
     ------------------------------------------------------------------------ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Atualiza estado visual e semântico dos botões
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        // Filtra os cards de projetos com transição suave
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. VALIDAÇÃO DO FORMULÁRIO DE CONTATO COM ACESSIBILIDADE
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('portfolio-contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    const nameGroup = document.getElementById('group-name');
    const emailGroup = document.getElementById('group-email');
    const messageGroup = document.getElementById('group-message');

    const nameError = document.getElementById('error-name');
    const emailError = document.getElementById('error-email');
    const messageError = document.getElementById('error-message');

    // Validador de formato de e-mail seguro
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Remove mensagem de erro ao digitar
    const clearError = (input, group, errorElement) => {
      group.classList.remove('has-error');
      input.removeAttribute('aria-invalid');
      errorElement.textContent = '';
    };

    // Aplica erro no campo
    const setError = (input, group, errorElement, message) => {
      group.classList.add('has-error');
      input.setAttribute('aria-invalid', 'true');
      errorElement.textContent = message;
    };

    // Ouvintes para limpar erros enquanto o usuário digita
    nameInput.addEventListener('input', () => clearError(nameInput, nameGroup, nameError));
    emailInput.addEventListener('input', () => clearError(emailInput, emailGroup, emailError));
    messageInput.addEventListener('input', () => clearError(messageInput, messageGroup, messageError));

    // Submissão do formulário
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasErrors = false;
      let firstInvalidInput = null;

      // 1. Validação do Nome
      const nameValue = nameInput.value.trim();
      if (!nameValue) {
        setError(nameInput, nameGroup, nameError, 'Por favor, informe seu nome.');
        hasErrors = true;
        firstInvalidInput = firstInvalidInput || nameInput;
      } else if (nameValue.length < 3) {
        setError(nameInput, nameGroup, nameError, 'O nome deve conter pelo menos 3 caracteres.');
        hasErrors = true;
        firstInvalidInput = firstInvalidInput || nameInput;
      } else {
        clearError(nameInput, nameGroup, nameError);
      }

      // 2. Validação do E-mail
      const emailValue = emailInput.value.trim();
      if (!emailValue) {
        setError(emailInput, emailGroup, emailError, 'Por favor, informe seu e-mail.');
        hasErrors = true;
        firstInvalidInput = firstInvalidInput || emailInput;
      } else if (!isValidEmail(emailValue)) {
        setError(emailInput, emailGroup, emailError, 'Por favor, insira um e-mail válido (ex: nome@dominio.com).');
        hasErrors = true;
        firstInvalidInput = firstInvalidInput || emailInput;
      } else {
        clearError(emailInput, emailGroup, emailError);
      }

      // 3. Validação da Mensagem
      const messageValue = messageInput.value.trim();
      if (!messageValue) {
        setError(messageInput, messageGroup, messageError, 'Por favor, escreva sua mensagem.');
        hasErrors = true;
        firstInvalidInput = firstInvalidInput || messageInput;
      } else if (messageValue.length < 10) {
        setError(messageInput, messageGroup, messageError, 'A mensagem deve ter pelo menos 10 caracteres.');
        hasErrors = true;
        firstInvalidInput = firstInvalidInput || messageInput;
      } else {
        clearError(messageInput, messageGroup, messageError);
      }

      // Se houver erros, foca no primeiro campo com problema
      if (hasErrors) {
        formFeedback.className = 'form-feedback error is-visible';
        formFeedback.textContent = 'Por favor, corrija os campos indicados acima antes de enviar.';
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        return;
      }

      // 4. Identificação da Área de Interesse selecionada
      const subjectSelect = document.getElementById('contact-subject');
      const subjectText = subjectSelect && subjectSelect.options[subjectSelect.selectedIndex]
        ? subjectSelect.options[subjectSelect.selectedIndex].text
        : 'Outro assunto / Parceria';

      // 5. Montagem da Mensagem Organizada
      const whatsappMessage = `Olá, Giovanna! Vim através do seu portfólio.

*Nome:* ${nameValue}
*E-mail:* ${emailValue}
*Área de Interesse:* ${subjectText}

*Mensagem:*
${messageValue}`;

      // 6. Construção do Link do WhatsApp com encodeURIComponent()
      const whatsappUrl = `https://wa.me/5519991707064?text=${encodeURIComponent(whatsappMessage)}`;

      // 7. Abertura da Janela do WhatsApp (não envia automaticamente; prepara o texto na conversa)
      let whatsappWindow = null;
      try {
        whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        whatsappWindow = null;
      }

      // 8. Mensagem de Orientação Acessível
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
        // Orientação acessível em caso de bloqueio de pop-up pelo navegador
        formFeedback.className = 'form-feedback warning is-visible';
        formFeedback.innerHTML = `
          <strong>✓ Formulário validado com sucesso!</strong><br>
          Se o WhatsApp não abriu automaticamente (bloqueio de pop-up do navegador), use o link de acesso direto:<br>
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:8px;">
            👉 Clique aqui para abrir a conversa no WhatsApp
          </a>
        `;
      } else {
        // Orientação quando a aba abrir com sucesso
        formFeedback.className = 'form-feedback success is-visible';
        formFeedback.innerHTML = `
          <strong>✓ Conversa iniciada no WhatsApp!</strong><br>
          Sua mensagem foi formatada e carregada no WhatsApp. Por favor, confira o texto na conversa e clique em <em>Enviar</em> para confirmar.<br>
          <small style="display:block; margin-top:6px;">
            O WhatsApp não abriu? <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Clique aqui para abrir diretamente</a>.
          </small>
        `;
      }
    });
  }

  /* ------------------------------------------------------------------------
     6. ANIMAÇÕES DISCRETAS AO ROLAR (INTERSECTION OBSERVER)
     ------------------------------------------------------------------------ */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Se o usuário prefere movimento reduzido ou sem suporte, mostra imediatamente
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  console.log('Portfólio de Giovanna Gomes de Freitas - Módulos Audiovisuais carregados com sucesso!');
});
