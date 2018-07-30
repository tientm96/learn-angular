import { Component, OnInit, OnDestroy } from '@angular/core';

//import ở đây để lất ra sd. Đã import và gọi ra providers[] trong app.module.ts (dùng đc cho all comp), nên ở đây ko cần providers[]
import { RestTodoService } from '../../folder-services/rest-todo.service';

//gọi model
import { RestTodo } from '../../folder-models/rest-todo.class';

//Tương tự việc lấy params trên link, dùng Subscription để lắng nghe. 
//Thì việc lấy api cũng sử dụng đối tượng Subscription để lắng nghe, nên phải tạo ra và hủy nó đi.
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-rest-todo',
  templateUrl: './rest-todo.component.html',
  styleUrls: ['./rest-todo.component.css']
})
export class RestTodoComponent implements OnInit, OnDestroy {

  private resttodos : RestTodo[] = []; //array

  //nếu tạo object thì bên html sd [(ngModel)]="resttodo.title", 
  //mà ở đây nếu để private resttodo : RestTodo = null; thì sẽ bị lỗi, vì null thì ban đầu đâu có gì để ngModel lấy ra đâu.
  //Vậy nên để sd ngModel với object thì object đó phải được khởi tạo new trước.
  //Khai báo ở đây vào vào ngOnInit new ra: resttodo = new RestTodo(id, title, completed);
  // private resttodo : RestTodo; // Kb 1 object

  //hoặc cách khác là sd các biến thành phần, để ngModel cho nó.
  private title : string;
  private completed : boolean = false;


  //dùng đối tượng Subscription để lắng nghe dl lấy từ api về, nên phải hủy nó đi. 
  private subscription : Subscription;



  constructor(private restTodoService : RestTodoService) { }

  ngOnInit() {
    this.loadData();
  }

  //hủy đối tượng subscription khi comp kết thúc.
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  
  loadData(){
    this.subscription = this.restTodoService.getAllTodos().subscribe(data => {
      this.resttodos = data;
    }, error => {
        // console.log(error);
      this.restTodoService.handleError(error); //gọi service xử lý lỗi nếu có.
    });

  }
  onAddRestTodo(){
    console.log(`${this.title} - ${this.completed}`); //ktra các dl nhập vào từ ngModel có đc ko

    //trong constructor của class RestTodo chỉ có title và completed, id ko vì đã set trên api là tự động tăng, nên ko cần.
    //Ta chỉ cần truyền lên những thành phần khác, id sẽ đc mockapi.io tự động tăng.
    let restTodo = new RestTodo(this.title, this.completed);

    this.subscription = this.restTodoService.addRestTodo(restTodo).subscribe(data => {
      //sau khi Post dl lên thì nhận giá trị đc respone về là data, là trả về 1 object vừa post lên.
      this.resttodos.push(data); //lúc này push vào mảng resttodos, để nó hiển thị qua html cho đúng cập nhật.
    }, error => {
        // console.log(error);
      this.restTodoService.handleError(error); //gọi service xử lý lỗi nếu có.
    });
  }


}
