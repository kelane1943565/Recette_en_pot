export default class Header{
    constructor(element){
    this.element = element;
    this.scrollLimit = 0.5;
    this.scrollPosition = 0;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;
    
        this.init();
        this.initNavMobile();
    }
    
    //permet de lire quand on scroll
    init(){
    window.addEventListener('scroll', this.onScroll.bind(this));
    }
    //permet de créer les évènements lorsqu'on scroll 
    onScroll(event){
        this.lastScrollPosition = this.scrollPosition;
        this.scrollPosition = document.scrollingElement.scrollTop;
    
     this.setHeaderState();   
     this.setDirectionState();
     
    }
    //permet de faire le scrollLimit(donc descendre un peu avant qu'il disparait)
    setHeaderState(){
    const scrollHeight = document.scrollingElement.scrollHeight;
    
    if(this.scrollPosition > scrollHeight * this.scrollLimit){
        this.html.classList.add('header-is-hidden');
    }
    else{
        this.html.classList.remove('header-is-hidden');
    }
    
    }
    //permet de savoir changer les classes pour faire disparaitre ou non le header quand on scroll
    setDirectionState(){
    
    
    if(this.scrollPosition >= this.lastScrollPosition){
        this.html.classList.add('is-scrolling-down');
        this.html.classList.remove('is-scrolling-up');
    }else{
        this.html.classList.remove('is-scrolling-down');
        this.html.classList.add('is-scrolling-up');
    }
    
    
    }
    
    initNavMobile(){
        const toggle = this.element.querySelector('.js-toggle');
        toggle.addEventListener('click',this.onToggleNav.bind(this));
    }
    
    onToggleNav(){
        this.html.classList.toggle('nav-is-active');
    }
    
    }