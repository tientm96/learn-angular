import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//để dùng Template-driven forms; two-way binding; service: phải import FormsModule và gọi ra dưới phần imports: []
//để sử dụng Reactive Form phải import ReactiveFormsModule và cũng gọi ra dưới phần import[].

//VÌ TA TÁCH RIÊNG MODULE, NÊN Ở COMP NÀY MUỐN SD CÁI GÌ THÌ PHẢI IMPORT RIÊNG, CHỨ KO PHỤ THUỘC VÀO APP.MODULE.TS
import { FormsModule } from '@angular/forms';





//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.
import { CommonModule } from '@angular/common';


import { RouterProductsComponent } from './router-products.component';



const routesConfig: Routes = [
    { path: 'products', component: RouterProductsComponent }
];



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        // RouterModule.forRoot(routesConfig)
        RouterModule.forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
    ],

    //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
    declarations: [RouterProductsComponent] 
})

export class ProductsModule {}

