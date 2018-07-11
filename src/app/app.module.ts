import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldComponent } from './word/word.component';
import { BookComponent } from './book/book.component';

/*TẠO COMPONENT
- app.module.ts : là file chạy đầu tiên.

+nên mọi component đc tạo dưới dạng Name.component.ts phải đc import vào app.module.cs,
và đc gọi vào bên trong declarations của file app.module.cs này.

+lúc này ta có thể gọi component ra giống như 1 thẻ </> ở file app.component.html(File hiển thị chính).\

*/

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent, //và gọi component vào đây\
    BookComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
