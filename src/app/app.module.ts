import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//để dùng Template-driven forms; two-way binding; service: phải import FormsModule và gọi ra dưới phần imports: []
//để sử dụng Reactive Form phải import ReactiveFormsModule và cũng gọi ra dưới phần import[].
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//để lấy service từ server phải import Http, để dùng GET hoặc POST
import { HttpModule } from '@angular/http';

//Từ bài Git branch 86 trở đi, dùng GET, POST, PUT, DELETE với HttpClientModule, vì phiên bản mới đã cập nhật Http->HttpClient
import { HttpClientModule } from '@angular/common/http';




//--------------------------------------------Phần import vài cài đặt để sử dụng router------------------------------------------------------
/*VÌ ĐÃ TÁCH NHỮNG GÌ LIÊN QUAN ĐẾN ROUTER RA RIÊNG BÊN app-routing.module.ts, 
NÊN SẼ XÓA/CMT NHỮNG CÁI LIÊN QUAN ĐẾN ROUTER Ở ĐÂY.
(xem giải thích sẽ cmt/xóa những chỗ nào: bên phần giải thích bên file app-routing.module.ts)

XÓA XONG THÌ GỌI MODULE ROUTER ĐÃ TÁCH VÀO ĐÂY: gọi class AppRoutingModule từ file app-routing.module.ts
VÀ ADD AppRoutingModule DƯỚI imports[] 


**CHÚ Ý: module chính app.module.ts chỉ add 1 file root duy nhất, nên phải gộp hết tất cả module con vào trong 1 file app-routing.module.ts, rồi mới add vào app.module.ts.
*/
import { AppRoutingModule } from './folder-router/app-routing.module';




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
import { ParentComponent } from './folder-components/parent/parent.component';
import { ChildComponent } from './folder-components/child/child.component';
import { CardComponent } from './folder-components/card/card.component';
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

// import { RouterHomeComponent } from './folder-components/router-home/router-home.component';
// import { RouterContact2Component } from './folder-components/router-contact2/router-contact2.component';
// import { RouterAboutComponent } from './folder-components/router-about/router-about.component'
// import { RouterProductsComponent } from './folder-components/router-products/router-products.component';
// import { RouterProductDetailComponent } from './folder-components/router-product-detail/router-product-detail.component';
// import { RouterProductListComponent } from './router-product-list/router-product-list.component';
// import { RouterProductEditComponent } from './folder-components/router-product-edit/router-product-edit.component';
// import { RouterLoginComponent } from './folder-components/router-login/router-login.component';

import { RestTodoComponent } from './folder-components/rest-todo/rest-todo.component';
import { TemplateDrivenFormComponent } from './folder-components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './folder-components/reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './folder-components/reactive-form2/reactive-form2.component';
import { ReactiveFormErrorValidateComponent } from './folder-components/reactive-form-error-validate/reactive-form-error-validate.component';











//import round.pipe.ts cũng giống như import 1 comp.
import { RoundPipe } from './folder-pipes/round.pipe';
import { FormatDataPipe } from './folder-pipes/format-data.pipe';
import { FilterPipe } from './folder-pipes/filter.pipe';
import { SortNumberPipe } from './folder-pipes/sort-number.pipe';
import { CapitalizePipe } from './folder-pipes/capitalize.pipe';
import { EvenOddPipe } from './folder-pipes/even-odd.pipe';
import { SortPipe } from './folder-pipes/sort.pipe';









//import IpService trong ip.service.ts vào đây app.module.ts, kéo xuống providers[] gọi nó ra: để nhiều comp đều sử dụng đc service này.
//Còn nếu chỉ import và gọi providers trong comp nào đó thì chỉ mỗi comp đó sd đc service này.
import { Ip2Service } from './folder-services/ip2.service';
import { LoggingService } from './folder-services/logging.service';
import { MovieService } from './folder-services/movie.service';
import { ProductService } from './folder-services/product.service';
import { RestTodoService } from './folder-services/rest-todo.service';








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
    // PageNotFoundCom,
    LearnPipe2Component,
    Child2Component,
    Parent2Component,
    UserListComponent,
    LifecycleHooksComponent,
    MovieListComponent,
    MovieHandleComponent,
    // RouterHomeComponent,
    // RouterContact2Component,
    // RouterAboutComponent,
    // RouterProductsComponent,
    // RouterProductDetailComponent,
    // RouterProductListComponent,
    // RouterProductEditComponent,
    // RouterLoginComponent
    RestTodoComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveForm2Component,
    ReactiveFormErrorValidateComponent,
    

    

    
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
    HttpClientModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routesConfig)

    //CHÚ Ý: module chính app.module.ts chỉ add 1 file root duy nhất, nên phải gộp hết tất cả module con vào trong 1 file app-routing.module.ts, rồi mới add vào app.module.ts.
    AppRoutingModule
  ],
  //gọi service đã import, service đc import và gọi trong file này sẽ được dùng cho tất cả comp
  providers: [
    Ip2Service, 
    LoggingService, 
    MovieService, 
    ProductService,
    RestTodoService
  ],

  //bootstrap: nơi khai báo comp chạy đầu tiên, là AppComponent.
  bootstrap: [AppComponent]
})
export class AppModule { }

