export class MainController {
  constructor () {
    'ngInject';
    this.postMessage = this.postMessage.bind(this);
  }

  postMessage(){
    console.log("this button was pushed");
  }
}
