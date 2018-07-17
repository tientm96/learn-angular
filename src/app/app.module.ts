import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//để dùng Template-driven forms và two-way binding phải import FormsModule và gọi ra dưới phần imports: []
//để sử dụng Reactive Form phải import ReactiveFormsModule và cũng gọi ra dưới phần import[].
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//để lấy service từ server phải import Http, dùng để get hoặc post
import { HttpModule } from '@angular/http';



//--------------------------------------------Phần import vài cài đặt để sử dụng router------------------------------------------------------
//+để sử dụng đc router để di chuyển các page theo link thì import Routes, RouterModule từ @angular/router
import { Routes, RouterModule } from '@angular/router';

//+tạo ra biến routesConfig: để config các cái routes (là các hướng chuyển trang): nhấn vào đường link /contacts thì chuyển đến ContactsComponent;
//nhấn vào link /detail  thì chuyển đến ContactDetailComponent.
const routesConfig: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'detail', component: ContactDetailComponent },

  //để chỉnh 1 trang làm home, nghĩa là khi vào http://localhost:4200 thì nó tự động chuyển đến /contacts: http://localhost:4200/contacts ;
  //  giống kiểu thiết lập trang mặc định trong .net MVC, ở đây thiết lập trang mặc định là contacts.
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },

  //Nếu + vào link 1 địa chỉ lỗi thì nó sẽ chạy đến trang của comp page-not-found (tự tạo comp này): vd: http://localhost:4200/sajsaksjla là 1 địa chỉ lỗi.
  //Ở đây ta thiết lập dẫn đến trang LỖI khi chạy địa chỉ lỗi tại đây.
  { path: '**', component: PageNotFoundComponent }  //dấu ** ý là ko vào đc tất cả comp nào rồi thì mới chạy đến comp PageNotFoundComponent

];


//+tiếp theo, kéo xuống chỗ imports: [, RouterModule.forRoot(routesConfig)], add RouterModule.forRoot() và truyền vào biến routesConfig đã tạo ở trên.

//--------------------------------------------Kết thúc phần import vài cài đặt để sử dụng router------------------------------------------------------



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
import { WeatherComponent } from './weather/weather.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignIn2Component } from './sign-in2/sign-in2.component';
import { SignIn3Component } from './sign-in3/sign-in3.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUp2Component } from './sign-up2/sign-up2.component';
import { SignUp3Component } from './sign-up3/sign-up3.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


//import round.pipe.ts cũng giống như import 1 comp.
import { RoundPipe } from './round.pipe';

//import IpService trong ip.service.ts vào đây app.module.ts, kéo xuống providers[] gọi nó ra: : để nhiều comp đều sử dụng đc service này.
//Còn nếu chỉ import và gọi providers trong comp nào đó thì chỉ mỗi comp đó sd đc service này----------------------.
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
    WeatherComponent,
    SignInComponent,
    SignIn2Component,
    SignIn3Component,
    SignUpComponent,
    SignUp2Component,
    SignUp3Component,
    ContactsComponent,
    ContactDetailComponent,
    PageNotFoundComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

