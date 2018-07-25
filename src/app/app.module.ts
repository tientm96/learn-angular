import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//để dùng Template-driven forms; two-way binding; service: phải import FormsModule và gọi ra dưới phần imports: []
//để sử dụng Reactive Form phải import ReactiveFormsModule và cũng gọi ra dưới phần import[].
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//để lấy service từ server phải import Http, để dùng GET hoặc POST
import { HttpModule } from '@angular/http';




//--------------------------------------------Phần import vài cài đặt để sử dụng router------------------------------------------------------
/*VÌ ĐÃ TÁCH NHỮNG GÌ LIÊN QUAN ĐẾN ROUTER RA RIÊNG BÊN app-routing.module.ts, 
NÊN SẼ XÓA/CMT NHỮNG CÁI LIÊN QUAN ĐẾN ROUTER Ở ĐÂY.
(xem giải thích sẽ cmt/xóa những chỗ nào: bên phần giải thích bên file app-routing.module.ts)

XÓA XONG THÌ GỌI MODULE ROUTER ĐÃ TÁCH VÀO ĐÂY: gọi class AppRoutingModule từ file app-routing.module.ts
VÀ ADD AppRoutingModule DƯỚI imports[] */
import { AppRoutingModule } from './app-routing.module';



//+để sử dụng đc router để di chuyển các page theo link thì import Routes, RouterModule từ @angular/router

// XEM GIẢI THÍCH CỤ THỂ TRONG contacts.component.ts

// import { Routes, RouterModule } from '@angular/router';

//+tạo ra biến routesConfig: để config các cái routes (là các hướng chuyển trang): nhấn vào đường link /contacts thì chuyển đến ContactsComponent;
//nhấn vào link /detail  thì chuyển đến ContactDetailComponent.

// const routesConfig: Routes = [
//   { path: 'contacts', component: ContactsComponent },
//   { path: 'detail', component: ContactDetailComponent },

//   //để chỉnh 1 trang làm home, nghĩa là khi vào http://localhost:4200 thì nó tự động chuyển đến /contacts: http://localhost:4200/contacts ;
//   //  giống kiểu thiết lập trang mặc định trong .net MVC, ở đây thiết lập trang mặc định là contacts.
//   { path: '', redirectTo: '/contacts', pathMatch: 'full' },

//   //Nếu + vào link 1 địa chỉ lỗi thì nó sẽ chạy đến trang của comp page-not-found (tự tạo comp này): vd: http://localhost:4200/sajsaksjla là 1 địa chỉ lỗi.
//   //Ở đây ta thiết lập dẫn đến trang LỖI khi chạy địa chỉ lỗi tại đây.
//   { path: '**', component: PageNotFoundComponent }  //dấu ** ý là ko vào đc tất cả comp nào rồi thì mới chạy đến comp PageNotFoundComponent

// ];


//+tiếp theo, kéo xuống chỗ imports: [, RouterModule.forRoot(routesConfig)], add RouterModule.forRoot() và truyền vào biến routesConfig đã tạo ở trên.

//--------------------------------------------Kết thúc phần import vài cài đặt để sử dụng router------------------------------------------------------



import { AppComponent } from './app.component';
import { WorldComponent } from './folder-components/word/word.component';
import { BookComponent } from './folder-components/book/book.component';
import { UserFormComponent } from './folder-components/user-form/user-form.component';
import { StructComponent } from './folder-components/struct/struct.component';
import { WordsComponent } from './folder-components/words/words.component';
import { PersonComponent } from './folder-components/person/person.component';
import { ListPersonComponent } from './folder-components/list-person/list-person.component';
import { ParentComponent } from './folder-components/parent.component';
import { ChildComponent } from './folder-components/child.component';
import { CardComponent } from './folder-components/card.component';
import { LearnPipeComponent } from './folder-components/learn-pipe/learn-pipe.component';
import { IpComponent } from './folder-components/ip/ip.component';
import { Ip2Component } from './folder-components/ip2/ip2.component';
import { WeatherComponent } from './folder-components/weather/weather.component';
import { SignInComponent } from './folder-components/sign-in/sign-in.component';
import { SignIn2Component } from './folder-components/sign-in2/sign-in2.component';
import { SignIn3Component } from './folder-components/sign-in3/sign-in3.component';
import { SignUpComponent } from './folder-components/sign-up/sign-up.component';
import { SignUp2Component } from './folder-components/sign-up2/sign-up2.component';
import { SignUp3Component } from './folder-components/sign-up3/sign-up3.component';
// import { ContactsComponent } from './contacts/contacts.component';
// import { ContactDetailComponent } from './contact-detail/contact-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LearnPipe2Component } from './folder-components/learn-pipe2/learn-pipe2.component';
import { Child2Component } from './folder-components/child2/child2.component';
import { Parent2Component } from './folder-components/parent2/parent2.component';
import { UserListComponent } from './folder-components/user-list/user-list.component';
import { LifecycleHooksComponent } from './folder-components/lifecycle-hooks/lifecycle-hooks.component';
import { MovieListComponent } from './folder-components/movie-list/movie-list.component';
import { MovieHandleComponent } from './folder-components/movie-handle/movie-handle.component';






//import round.pipe.ts cũng giống như import 1 comp.
import { RoundPipe } from './folder-pipes/round.pipe';
import { FormatDataPipe } from './folder-pipes/format-data.pipe';
import { FilterPipe } from './folder-pipes/filter.pipe';
import { SortNumberPipe } from './folder-pipes/sort-number.pipe';
import { CapitalizePipe } from './folder-pipes/capitalize.pipe';
import { EvenOddPipe } from './folder-pipes/even-odd.pipe';
import { SortPipe } from './folder-pipes/sort.pipe';





/*import IpService trong ip.service.ts vào đây app.module.ts, kéo xuống providers[] gọi nó ra: : để nhiều comp đều sử dụng đc service này.
Còn nếu chỉ import và gọi providers trong comp nào đó thì chỉ mỗi comp đó sd đc service này.*/
import { IpService } from './folder-components/ip2/ip.service';
import { LoggingService } from './folder-services/logging.service';
import { MovieService } from './folder-services/movie.service';









/*TẠO COMPONENT
- app.module.ts : là file chạy đầu tiên.
+nên mọi component đc tạo dưới dạng Name.component.ts phải đc import vào app.module.cs,
và đc gọi vào bên trong declarations của file app.module.cs này.
+lúc này ta có thể gọi component ra giống như 1 thẻ </> ở file app.component.html(File truyền vào file hiển thị chính: index.html).
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
    // ContactsComponent,
    // ContactDetailComponent,
    // PageNotFoundComponent,
    LearnPipe2Component,
    Child2Component,
    Parent2Component,
    UserListComponent,
    LifecycleHooksComponent,
    MovieListComponent,
    MovieHandleComponent,


    

    
    RoundPipe,
    FormatDataPipe,
    FilterPipe,
    SortNumberPipe,
    CapitalizePipe,
    EvenOddPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routesConfig)
    AppRoutingModule
  ],
  //gọi service đã import, service đc import và gọi trong file này sẽ được dùng cho tất cả comp
  providers: [IpService, LoggingService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

