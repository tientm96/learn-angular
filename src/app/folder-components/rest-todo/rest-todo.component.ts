
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

  public resttodos : RestTodo[] = []; //array

  //nếu tạo object thì bên html sd [(ngModel)]="resttodo.title", 
  //mà ở đây nếu để public resttodo : RestTodo = null; thì sẽ bị lỗi, vì null thì ban đầu đâu có gì để ngModel lấy ra đâu.
  //Vậy nên để sd ngModel với object thì object đó phải được khởi tạo new trước.
  //Khai báo ở đây vào vào ngOnInit new ra: resttodo = new RestTodo(id, title, completed);

  //hoặc ko cần new, dùng ngIf bên html, nếu =null thì đừng cho hiện lên.
  public resttodo : RestTodo; // Kb 1 object

  //hoặc cách khác là sd các biến thành phần, để ngModel cho nó.
  //các biến muốn ngModel thì phải để public mới đc. Thường thì trong angular nên để các kb dưới dạng public.
  public title : string; 
  public completed : boolean = false;


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

    // HÀM NÀY MUỐN DEBUGGER THÌ ĐẶT DÒNG debugger Ở ĐÂY. CHẠY LÊN F12>SOURCE, ĐƯA CHUỘT VÀO GIÁ TRỊ CẦN XEM, F8 ĐỂ THOÁT DEBUGGER.  
    // debugger


    //trong constructor của class RestTodo chỉ có title và completed, id ko vì đã set trên api là tự động tăng, nên ko cần.
    //Ta chỉ cần truyền lên những thành phần khác, id sẽ đc mockapi.io tự động tăng.
    let restTodo = new RestTodo(this.title, this.completed);

    this.subscription = this.restTodoService.addRestTodo(restTodo).subscribe(data => {
      //sau khi Post dl lên thì nhận giá trị đc respone về là data là 1 object vừa post lên.
      //ta cần lấy data này về để cập nhật lại mảng hiển thị qua html.
    
      //cập nhật lại mảng.
      this.resttodos.push(data); //lúc này push vào mảng resttodos, để nó hiển thị qua html cho đúng cập nhật.
    
      console.log(data.completed);
    }, error => {
        // console.log(error);
      this.restTodoService.handleError(error); //gọi service xử lý lỗi nếu có.
    });
  }

  
  //-----------------------PUT, DELETE---------------------------------------------

  //Chỉ có khi bấm vào edit thì biến resttodo mới đc gán giá trị, mới hết null, như vậy form edit trong html mới hiện.
  onEditTodo(resttodo: RestTodo){
    this.resttodo = resttodo;
  }

  //sk khi nhấn nút save update trong form edit.
  onUpdateRestTodo(){
    this.subscription = this.restTodoService.updateRestTodo(this.resttodo).subscribe(data => {
      //sau khi PUT dl lên thì nhận giá trị đc respone về là data là 1 object vừa đc cập nhật.
      //ta cần lấy data này về để cập nhật lại mảng hiển thị qua html.

      //cập nhật lại mảng, gán lại thành phần đã update vào mảng cũ.
      let index = this.getIndex(data.id);
      this.resttodos[index] = data;

    }, error => {
      this.restTodoService.handleError(error); 
    });

    // sau khi nhấn save để update, thì cho ẩn form edit đi, bằng cách gán null lại cho biến resttodo.
    this.resttodo = null;
  }

  //hàm lấy vị trí index của object trong mảng, lấy theo thuộc tính id của object đó.
  getIndex(id: number) : number {
    let result = 0;

    this.resttodos.forEach((item, index) => {
      if(item.id ===  id){
        result = index;
      }
    });
    return result;
  }

  //kích vào nút Delete trên row of table, thì nó sẽ gửi về id, dựa theo id đó mà xóa.
  onDeleteTodo(id: number){
    this.subscription = this.restTodoService.deleteRestTodo(id).subscribe(data => {
      //sau khi delete thì nhận giá trị đc respone về là data chính là object vừa bị delete.
      //ta cần lấy data này về để cập nhật lại mảng hiển thị qua html.

      //cập nhật lại mảng.
      let index = this.getIndex(data.id);
      this.resttodos.splice(index, 1); //xóa tại vị trí index, xóa 1 phần tử

    }, error => {
      this.restTodoService.handleError(error); 
    });
  }


}
