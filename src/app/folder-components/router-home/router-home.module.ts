import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Để các comp có sử dụng module routing này: khi routing sẽ sử dụng đc ngIF, ngFor: thì ở module routing này phải import thư viện này. 
//Và gọi xuống phần imports[] trong @NgModule({}) bên dưới.
import { CommonModule } from '@angular/common';

import { RouterHomeComponent } from './router-home.component';


//canDeactive service
import { AccessGuard } from './../../folder-services/guards/access.guard';




const routesConfig: Routes = [
    { 
        path: 'index', 
        component: RouterHomeComponent,

        /*gọi service canDeactivate: [AccessGuard]: cho liên kết path nào muốn giữ lại, ko cho thoát ra khỏi path đó,
            liên kế path trong router-home.module.ts này.
        Nếu auth.guard.ts trả về true thì có thể thoát ra, còn false thì ko thể thoát ra khỏi path đó.
 
        Xem trong access.guard.ts. Nhớ import service và gọi xuống providers.*/
        canDeactivate: [AccessGuard]
    }
];


@NgModule({
    imports: [
        CommonModule,
        // RouterModule.forRoot(routesConfig)
        RouterModule.forChild(routesConfig) //vì đây là module con chỉ với 1 comp, nên gọi forChild() chứ ko phải forRoot như module gộp nhiều comp.
    ],

    //declarations[] để gọi class ContactsComponent từ comp đã import vào (giống như bên app.module.ts cũng import xong thì gọi xuống declarations)
    declarations: [RouterHomeComponent],

    //providers: nơi import service
    providers: [
        AccessGuard
    ]
    
})

export class HomeModule {}

