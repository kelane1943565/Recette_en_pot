export default class Scrolly {
constructor(element){


    this.element = element;

this.options = {
    rootMargin: '0px 0px 0px 0px'
}


    this.init();
}
init(){ 
this.observer = new IntersectionObserver(this.watch.bind(this),this.options);

const items = this.element.querySelectorAll('[data-scrolly]');

for (let i = 0; i < items.length; i++) {
    const item = items[i]; 
    this.observer.observe(item);//permet de faire une action et d'observer lorsqu'on voit un item
}

}
//permet d'activer une animation quand on vois une balise qui peut s'activer avec le scrolly 
watch(entries){
for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const target = entry.target;
   

    if(entry.isIntersecting){
        target.classList.add('is-active');
this.observer.unobserve(target);//une fois qu'on a déja vu la balise, elle tient compte qu'on la voit tout le temps
    }else{
        target.classList.remove('is-active');
    }
}

}

}