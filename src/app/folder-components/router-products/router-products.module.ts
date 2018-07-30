import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//để dùng Template-driven forms; two-way binding(là ngModel); service: phải import FormsModule và gọi ra dưới phần imports: []
//để sử dụng Reactive Form phải import ReactiveFormsModule và cũng gọi ra dưới phần import[].
//VÌ TA TÁCH RIÊNG MODULE, NÊN Ở COMP NÀY MUỐN SD CÁI GÌ THÌ PHẢI IMPORT RIÊNG, CHỨ KO PHỤ THUỘC VÀO APP.MODULE.TS
import { FormsModule } from '@angular/forms';





//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.
import { CommonModule } from '@angular/common';


import { RouterProductsComponent } from './router-products.component';
import { RouterProductListComponent } from '../router-product-list/router-product-list.component';
import { RouterProductEditComponent } from '../router-product-edit/router-product-edit.component';
import { RouterLoginComponent } from '../router-login/router-login.component';




//service
//Guard là 1 service, làm canactive cho login.
import { AuthGuard } from '../../folder-services/guards/auth.guard';




const routesConfig: Routes = [
    { 
        path: 'products', 

        /*-nếu có dòng này thì có nghĩa là đi đến RouterProductsComponent, bên children muốn đc gọi ra thì phải nằm trong <outlet> 
        của RouterProductsComponent, phải thiết lập 1 thẻ <outlet> bên trong RouterProductsComponent đó.
        -nếu ko có dòng này thì sẽ đi trực tiếp tới children mỗi khi link = products/
        -Ở đây ta để nguyên dòng này với ý muốn router 1 comp bên trong 1 comp, các nội dung của comp con sẽ đổ vào <router-outlet> của comp cha.
        */
        component: RouterProductsComponent, 

        /*gọi service canActivate: [AuthGuard]: cho liên kết path nào muốn bảo vệ, liên kế path trong router-products.module.ts.
        nếu auth.guard.ts trả về true thì nó cho vào, còn false thì nó ko cho vào path đó.
        Xem trong auth.guard.ts. Nhớ import service và gọi xuống providers.*/
        canActivate: [AuthGuard],

        
        //Thay vì /products sẽ đi thẳng tới RouterProductsComponent, thì sẽ đi vào child{} và sẽ nối các đuôi child vào, vd: /products/list
        children: [
            //cấu hình đường dẫn khi kích vào products thì sẽ chạy đường dẫn mặc định là: /products/list
            {
                path: '',
                redirectTo: '/products/list',
                pathMatch: 'full'
            },
            {
                path: 'list', //đường dẫn products/list sẽ đến com RouterProductListComponent
                component: RouterProductListComponent
            },
            {
                path: 'edit/:id', 
                component: RouterProductEditComponent
            }
        ]
    },
    {
        path: 'login',
        component: RouterLoginComponent
    }
];



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        // RouterModule.forRoot(routesConfig)
        RouterModule.forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
    ],

    //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
    declarations: [
        RouterProductsComponent, 
        RouterProductListComponent, 
        RouterProductEditComponent, 
        RouterLoginComponent
    ],

    //providers: nơi import service
    providers: [
        AuthGuard
    ]
})

export class ProductsModule {}

