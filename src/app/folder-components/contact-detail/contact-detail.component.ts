/*Để nhận id,name,phoneNumber từ comp này sang app-routing.module.ts

-import ActivatedRoute, ParamMap từ router
-trong constructor sẽ khởi tạo biến cho ActivatedRoute
-Vào ngOnInit(): dùng ParamMap để get các biến truyền vào. vd params.get('id') là lấy id truyền qua từ app-routing.module.ts.
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; 

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})

export class ContactDetailComponent implements OnInit {
  name = '';
  phoneNumber = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id'); //get id truyền qua từ app-routing.module.ts

      this.name = params.get('name');
      this.phoneNumber = params.get('phoneNumber');

      console.log(id, this.name, this.phoneNumber);
    });
  }

}
