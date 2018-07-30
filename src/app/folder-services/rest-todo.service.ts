import { Injectable } from '@angular/core';

//service dùng get, post, put, delete. Dùng HttpClient mới chứ ko dùng Http(phiên bản cũ)
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//kết quả get về là kiểu Observable nên phải import nó
import { Observable } from 'rxjs';

//get api trả về kiểu Observable của model RestTodo. Do đó model RestTodo phải đc viết với các thuộc tính === thuộc tính của object trả về.
import { RestTodo } from '../folder-models/rest-todo.class';


@Injectable({
  providedIn: 'root'
})
export class RestTodoService {
  //Xem cách tạo api giả lập trên mockapi.io tại: https://www.youtube.com/watch?v=puaaPncTAoQ&list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp
  //(trên mockapi.io đăng nhập với tientm96@gmail.com)
  //api này chứa mảng object, mỗi obj gồm có: {id: number(tự động tăng, ko cần quan tâm), title: string, completed: boolean}.
  private API = 'http://5b5ead8e8e9f160014b88d16.mockapi.io/products';

  constructor(private httpClient: HttpClient) { }

  //get api trả về kiểu Observable của model RestTodo. Do đó model RestTodo phải đc viết với các thuộc tính === thuộc tính của object trả về.
  getAllTodos() : Observable<RestTodo[]> {
    return this.httpClient.get<RestTodo[]>(this.API);
  }


  //tạo hàm thông báo lỗi
  handleError(err){
    //nếu thỏa đk (err.error instanceof Error): nếu lỗi nằm trong danh sách lỗi Error, thì đó là lỗi từ client.
    if(err.error instanceof Error){
      console.log(`Client-side error: ${err.error.message}`);//cú pháp ES6
    }
    //nếu ngược lại thì là lỗi của server, xử lý như sau
    //vd: lỗi truyền sai api thì sẽ in ra lỗi: 404(status) - notFound(error)
    else{
      console.log(`Server-side error: ${err.status} - ${err.error}`);
    }
  }
  

  //POST:
  //Viết phương thức http, gửi request post dl lên server để insert dữ liệu.
  //Xem lại service: sign-in3.service.ts, cấu trúc post là: post(url, body, header?)

  //đưa request post lên server, sau đó nhận response trả về, nên sẽ có return.
  //Service sẽ nhận trả về là 1 object RestTodo, sau đó truyền qua comp bằng cách comp gọi service này.

  //Sau khi POST lên server thì dl đc đưa vào api và lưu cứng luôn trong đó, vào mockapi.io để check dl.
  addRestTodo(resttodo: RestTodo) : Observable<RestTodo> {
    //gọi phương thức để post lên, và return về giá trị đc response về, là trả về object vừa post lên đó.
    return this.httpClient.post<RestTodo>(this.API, resttodo); //this.API là url nhận dl post lên, resttodo là dl cần post lên.
  }

}
