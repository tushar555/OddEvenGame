import { Injectable } from '@angular/core';

@Injectable()
export class HandleGameService {

  counter: any = 1;
  interval: any;
  evenNumbers: any = [];
  oddNumbers: any = [];
  constructor() { }

  start() {
   this.interval =  setInterval(() => {
        if (this.counter % 2 == 0) {
          this.evenNumbers.push(this.counter);
        }else {
          this.oddNumbers.push(this.counter);
        }
        this.counter++;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  showNumbers(type) {
    const promise = new Promise((resolve, reject) => {
      if (type == 'even') {
        resolve(this.evenNumbers);
      }else {
        resolve(this.oddNumbers);
      }
    });
    return promise;
  }
}
