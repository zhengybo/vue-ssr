import {Browser} from '@/js/public'

export default class MoveTo {
  constructor(element,options = {}) {
    this.element = element;
    this.downX = 0;
    this.downY = 0;
    this.lastMoveX = 0;
    this.lastMoveY = 0;

    this.upHock = options.upHock;
    this.downHock = options.downHock;
    this.moveHock = options.moveHock;
    this.offsetHock = options.offsetHock;
    this.init();
  }

  init(){
    const fn = this.move.bind(this);
    document.addEventListener("mousedown", (e) => {
      if(e.target != this.element)return;
      this.down(e);
      document.addEventListener('mousemove',fn)
    }, false);
    document.addEventListener("mouseup", () => {
      this.up();
      document.removeEventListener('mousemove',fn)
    }, true);
  }

  down(e){
    this.lastMoveX = this.downX = e.clientX;
    this.lastMoveY = this.downY = e.clientY;
    typeof this.downHock=='function'&&this.downHock(this.downX,this.downY);
  }
  move(e){
    let moveToX = e.clientX - this.lastMoveX,
        moveToY = e.clientY - this.lastMoveY;
    this.lastMoveX = e.clientX;
    this.lastMoveY = e.clientY;
    this.offsetX = e.clientX - this.downX;
    this.offsetY = e.clientY - this.downY;
    typeof this.offsetHock=='function'&&this.offsetHock(moveToX,moveToY);
    typeof this.moveHock=='function'&&this.moveHock(this.offsetX,this.offsetY);
  }
  up(){
    typeof this.upHock=='function'&&this.upHock(this.offsetX,this.offsetY);
  }

}
