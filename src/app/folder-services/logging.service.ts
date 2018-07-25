import { Injectable } from '@angular/core';

// bỏ dòng này đi, vì tạo bằng lệnh nên nó ra như v, viết lại bên dưới
// @Injectable({providedIn: 'root'})
@Injectable()


export class LoggingService {

  constructor() { }

  logging(): void {
    console.log('Test service logging.service.ts');
  }
}
