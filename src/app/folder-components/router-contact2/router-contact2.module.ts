import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.
import { CommonModule } from '@angular/common';


import { RouterContact2Component } from './router-contact2.component';



const routesConfig: Routes = [
    { path: 'contact2', component: RouterContact2Component }
];


@NgModule({
    imports: [
        CommonModule,
        // RouterModule.forRoot(routesConfig)
        RouterModule.forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
    ],

    //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
    declarations: [RouterContact2Component] 
})

export class Contact2Module {}
