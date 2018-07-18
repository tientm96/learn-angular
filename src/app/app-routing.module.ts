
/*
-Tách những code để routing bên app.module.ts ra thành 1 module khác app-routing.module.ts.
(rồi sẽ gọi app-routing.module.ts vào app.module.ts: để router. Như v sẽ làm gọn app.module.ts hơn)

GIẢI THÍCH CHO app-routing.module.ts:
-----------------
**Tại routing module đc tách ra. Tạo ra file mới: app-routing.module.ts (ngang hàng với app.module.ts)
-import NgModule từ core
-import Routes, RouterModule từ router
-import 3 class của 3 component: Contacts,ContactDetail,PageNotFoundComponent (những comp nào có liên quan đến việc routing thì tách ra import trong này)

-Tạo ra routesConfig, copy từ app.module.ts qua, bên đó có giải thích rõ ràng rồi

-Tạo decurator function tên là: @NgModule({}) để chứa:
 +import[] những cái cần thiết cho router như trong app.module.ts
 
 +declarations[] để gọi các class (3 class ContactsComponent,ContactDetailComponent,PageNotFoundComponent) comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)

(exports có s)
 +expors: [RouterModule] : Tại vì trong app.component.html có dùng router-outlet nên ở đây ta phải exports RouterModule ra.
(sẽ báo lỗi vì @NgModule({}) cần phải tạo thêm export class tiếp theo sau đây, để nó liên kết)

-Tạo export class AppRoutingModule{}
----------------------------------------------------------------------------------------------------

GIẢI THÍCH CHO app.component.ts
----------
**Tại app.module.ts: XÓA HOẶC Cmt LẠI CÁC khai báo đã tách ra bên này. IMPORT FILE module TÁCH VÀO LẠI app.module.ts

-import module đã tách ra vào app.module.ts: import { AppRoutingModule } from './app-routing.module';
kéo xuống phần imports[] gọi AppRoutingModule vào.
 
-Vì đã import AppRoutingModule vào rồi, nên sẽ xóa những cái dư thừa đã viết lại bên AppRoutingModule.

+XÓA import { Routes, RouterModule } from '@angular/router';

+XÓA biến const routesConfig và các khai báo của nó.
kéo xuống phần imports[], xóa dòng gọi RouterModule.forRoot(routesConfig) trong imports[] đó.

+XÓA các import ContactsComponent, ContactDetailComponent, PageNotFoundComponent; 
và xóa các lần gọi của các comp này trong declarations[]. 
(Vì đã chuyển qua app-routing.module.ts rồi, nên ở đây ko cần nữa)

*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.
import { CommonModule } from '@angular/common';


import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig: Routes = [
    
    /*-Kích vào đường dẫn contacts, thì sẽ làm việc trên component ContactsComponent, và chuyển màn hình đến ContactsComponent.

    -Đường dẫn path sẽ đc truyền vào từ routerLink="/detail/{{ contact.id }}" trong html, khi kích vào sẽ cho ra link /detail/1 /detail/2 /detail/3 ...
    Vậy khi link là /detail/1 thì path:'detail/:id' sẽ nhận đường dẫn này vì đúng với format của nó, rồi chuyển đến ContactDetailComponent.

    { path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent } thông qua đúng format với routerLink bên html để lấy dl từ bên đó.
    -Ở đây sẽ lấy dl id, name, phoneNumber từ html để truyền qua ContactDetailComponent: XEM giải thích QUY TRÌNH TRUYỀN DL tại file contacts.component.html.
    */
    { path: 'contacts', component: ContactsComponent },
    // { path: 'detail', component: ContactDetailComponent },
    { path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent },

    //để chỉnh 1 trang làm home, nghĩa là khi vào http://localhost:4200 thì nó tự động chuyển đến /contacts: http://localhost:4200/contacts ;
    //  giống kiểu thiết lập trang mặc định trong .net MVC, ở đây thiết lập trang mặc định là contacts.
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },

    //Nếu + vào link 1 địa chỉ lỗi thì nó sẽ chạy đến trang của comp page-not-found (tự tạo comp này): vd: http://localhost:4200/sajsaksjla là 1 địa chỉ lỗi.
    //Ở đây ta thiết lập dẫn đến trang LỖI khi chạy địa chỉ lỗi tại đây.
    { path: '**', component: PageNotFoundComponent }  //dấu ** ý là ko vào đc tất cả comp nào rồi thì mới chạy đến comp PageNotFoundComponent

];

//Tạo @NgModule để gọi các module và comp đã import ở trên.  
@NgModule({
    imports: [RouterModule.forRoot(routesConfig), CommonModule],
    declarations: [
        ContactsComponent,
        ContactDetailComponent,
        PageNotFoundComponent
    ],

    exports: [RouterModule]
})

export class AppRoutingModule { }
