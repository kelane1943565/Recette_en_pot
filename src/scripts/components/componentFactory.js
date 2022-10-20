import Modal from './Modal';
import Carousel from './Carousel';
//import Header from './Header';
import Cursor from './Cursor';
import Scrolly from './Scrolly';
import Form from './Form';
import Video from './Video';

export default class ComponentFactory {
  constructor() {
    this.componentList = {
      Modal,
      Carousel,
      Cursor,
      //     Header,
      Scrolly,
      Form,
      Video,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');
    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        new this.componentList[componentName](element);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
