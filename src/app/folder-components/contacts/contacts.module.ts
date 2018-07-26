/*
-Tạo ra những cái ngModule nhỏ hơn, để quản lý code tốt hơn trong những cái module riêng như app-routing.module.ts
=>Viết module riêng cho mỗi comp có sử dụng routing.

THỰC HIỆN
-trong folder contacts, tạo contacts.module.ts 
-trong contacts.module.ts: (tương tự như app-routing.module.ts: xem cụ thể trong file đó).

GIẢI THÍCH CHO contacts.module.ts:
-----------------
**Tại routing module đc tách ra. Tạo ra file mới: app-routing.module.ts (ngang hàng với app.module.ts)
-import
+import NgModule từ core
+import Routes, RouterModule từ router
+import CommonModule từ common: để comp contacts routing với module này, khi render ra html sẽ sử dụng đc ngIF, ngFor
+import class component của nó: Contacts (ở đây làm module riêng cho comp contacts).

-Tạo ra routesConfig (copy từ app.module.ts qua, bên đó có giải thích rõ ràng rồi): bên trong chỉ cần 1 path để điều hướng đến ContactsComponent thôi.

-Tạo decurator function tên là: @NgModule({}) để chứa:
 +import[] những cái cần thiết cho router như trong app.module.ts
 +declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)

 +(sẽ báo lỗi vì @NgModule({}) cần phải tạo thêm export class tiếp theo sau đây, để nó liên kết)

 +CÁI NÀY TRONG MODULE CON, NÊN KO CẦN: expors(exports có s): [RouterModule] : Tại vì trong app.component.html có dùng router-outlet nên ở đây ta phải exports RouterModule ra.

-Tạo export class ContactsModule{}
----------------------------------------------------------------------------------------------------

GIẢI THÍCH CHO app-routing.module.ts
----------
**Tại app-routing.module.ts: XÓA HOẶC Cmt LẠI CÁC khai báo đã tách ra bên này. IMPORT FILE module TÁCH (contacts.module.ts) VÀO LẠI app-routing.module.ts

-import ContactsModule của contacts.module.ts vào đây; kéo xuống phần import trong @NgModule để thêm ContactsModule vào:
    +nếu là Angular4 thì phải thêm ở đầu imports: [ContactsModule, RouterModule.forRoot(routesConfig), CommonModule ]
    +nếu là Angular6 thì thêm ở đâu cũng đc, ở đây thêm ở cuối imports: [RouterModule.forRoot(routesConfig), CommonModule, ContactsModule ]

-XÓA/cmt: import ContactsComponent và lần bỏ gọi nó trong declarations[] bên dưới

-XÓA/cmt: { path: 'contacts', component: ContactsComponent }, vì đã move qua bên contacts.module.ts

*/


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';

const routesConfig: Routes = [
    { path: 'contacts', component: ContactsComponent }
];


@NgModule({
    imports: [
        CommonModule,
        // RouterModule.forRoot(routesConfig)
        RouterModule.forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
    ],

    //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
    declarations: [ContactsComponent] 
})

export class ContactsModule {}

