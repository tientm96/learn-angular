import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//để dùng two-way binding phải import dòng này và gọi ra dưới phần imports: []
import { FormsModule } from '@angular/forms';

//để lấy service từ server phải import Http
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WorldComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { IpComponent } from './ip/ip.component';
import { Ip2Component } from './ip2/ip2.component';

//import round.pipe.ts cũng giống như import 1 comp.
import { RoundPipe } from './round.pipe';

//import ip.service.ts ở đây: để nhiều comp đều sử dụng đc service này.
//kéo xuống providers[] gọi nó ra.
import { IpService } from './ip2/ip.service';



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
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    IpComponent,
    Ip2Component,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
