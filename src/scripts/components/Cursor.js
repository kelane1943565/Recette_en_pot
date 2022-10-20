export default class Cursor {
  constructor(element) {
    this.element = element;
    this.init();
    document.documentElement.classList.add('custom-cursor');
  }
  init() {
    document.addEventListener('mousemove', this.followCursor.bind(this));
    document.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));

    this.initHoverAnimation();
  }
  //permet de savoir quand on est sur une balise cliquable en changeant l'animation (en gros un hover)
  initHoverAnimation() {
    const links = document.querySelectorAll('a, button, .swiper-wrapper, summary');

    for (let i = 0; i < links.length; i++) {
      const link = links[i];

      link.addEventListener('mouseenter', this.onLinkHover.bind(this));
      link.addEventListener('mouseleave', this.onLinkOut.bind(this));
    }
  }
//permet de suivre le curseur
  followCursor(evt) {
    const mouseX = evt.pageX;
    const mouseY = evt.pageY;

    this.element.style.left = `${mouseX}px`;
    this.element.style.top = `${mouseY}px`;
  }//mettre la couleur du hover sur le curseur
  onLinkHover() {
    this.element.classList.add('hover');
  }//enlever la couleur du hover sur le curseur
  onLinkOut() {
    this.element.classList.remove('hover');
  }//réduire la grosseur du hover sur le curseur(en gros ajouter la classe qui va réduire la grosseur du curseur)
  onMouseDown() {
    this.element.classList.add('down');
  }//grossir la grosseur du hover sur le curseur(en gros enlever la classe qui va réduire la grosseur du curseur)
  onMouseUp() {
    this.element.classList.remove('down');
  }
}
