export class MainController {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
    this.postMessage = this.postMessage.bind(this);
  }

  postMessage(){
    this.$http.post('http://localhost:5000/api/message', {msg: this.message});
  }
}
