import Utils from '../utils/Utils';

export default class Modal {
  constructor(element) {
    this.element = element;
    this.modalId = this.element.dataset.modalId;

    this.init();
  }

  init() {
    this.element.addEventListener('click', this.open.bind(this));
    setTimeout(open(), 1000);

    this.close = this.close.bind(this);
  }
  //si on clique sur une carte qui contient "data-modal-id="tpl-modal" " il va y avoir une modal personnalisé qui va apparaitre
  updateContent() {
    if (this.modalId == 'tpl-modal-tool') {
      this.modalElement.innerHTML = Utils.parseTemplate(
        this.modalElement.innerHTML,
        { title: this.element.dataset.modalTitle }
      );
    }
  }

  //permet d'ouvrir la fenêtre modale
  open(event) {
    event.preventDefault();

    this.appendModal();
  }
  // permet de fermer la fenetre modal et de supprimer la suprimmer unefois en dehors de vue
  close(event) {
    document.documentElement.classList.remove('modal-is-active');

    this.closeButton.removeEventListener('click', this.close);

    setTimeout(this.destroy.bind(this), 1000);
  }
  //timer pour supprimer la modal du site
  destroy() {
    this.modalElement.parentElement.removeChild(this.modalElement);
  }
  //permet de créer une copie de la modal et de la faire apparaitre. Plus rendre le bouton ,pour fermer la fenêtre ,fonctionnel
  appendModal() {
    const template = document.querySelector(`#${this.modalId}`);

    if (template) {
      this.modalElement = template.content.firstElementChild.cloneNode(true);

      this.updateContent();

      document.body.appendChild(this.modalElement);

      this.element.getBoundingClientRect();
      document.documentElement.classList.add('modal-is-active');

      this.closeButton = this.modalElement.querySelector('.js-close');
      this.closeButton.addEventListener('click', this.close);
    } else {
      console.log(`La ${componentName} n'existe pas`);
    }
  }
}
