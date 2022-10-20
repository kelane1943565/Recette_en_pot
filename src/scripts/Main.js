import Icons from './utils/Icons';
import ComponentFactory from './components/componentFactory';
/** Classe principale du projet */
class Main {
  /**
   * Méthode constructeur
   */
  constructor() {
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    document.documentElement.classList.add('has-js');
    new ComponentFactory();
    Icons.load();
  }
}

new Main();
