import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//để dùng two-way binding phải import dòng này và gọi ra dưới phần imports: []
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorldComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';

/*TẠO COMPONENT
- app.module.ts : là file chạy đầu tiên.

+nên mọi component đc tạo dưới dạng Name.component.ts phải đc import vào app.module.cs,
và đc gọi vào bên trong declarations của file app.module.cs này.

+lúc này ta có thể gọi component ra giống như 1 thẻ </> ở file app.component.html(File hiển thị chính).\

*/

//và gọi component vào đây
@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
