import { Component, Input, OnChanges, OnInit, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  public products : any[] = [];

  @Input() total: Number = 0;

  public previousTotal : number;

  /* ko phải hook, nhưng đc gọi đầu tiên, thường dùng để tiêm các Dependency Injection như các Service.
  */
  constructor() { 
    console.log('LifeCycle hook: Constructor()');
  } 


  /*
  -ngOnChanges: đc thực hiện khi @INPUT có sự thay đổi, đc quản lý thông qua đối tượng SimpleChanges, đc gọi trước cả ngOnInit().
  -mỗi lần nhận giá trị input gửi từ app.comp.html gửi về thì hàm ngOnChanges() đc thực thi, dùng để xử lý khi @input có sự thay đổi.
  
  -cho ta 1 đối tượng kiểu SimpleChanges (SimpleChanges phải import từ @Angular/core).
  -object SimpleChanges có các thuộc tính: 
	+currentValue: giá trị hiện tại,
	+previousValue: giá trị trước đó,
	+firstChange: thay đổi lần đầu tiên: true/false.

  Console.log và F12 ta thấy, sau mỗi lần input thay đổi thì: sẽ cho ra object total:simpleChanges với total là tên input nhận sự thay đổi,
    và object đó chứa đầy đủ các thuộc tính như trên. */ 
  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('LifeCycle hook: ngOnChanges()');
    console.log(simpleChanges);
    this.previousTotal = simpleChanges.total.previousValue;
  }



  /* chạy ngay sau khi ngOnChanges() được gọi lần đầu tiên và chỉ chạy 1 lần duy nhất.
  Dùng để khởi tạo các giá trị, các thuộc tính đầu vào của comp.
  */
  ngOnInit() {
    console.log('LifeCycle hook: ngOnInit()');
    this.products = [
      {
        id: 1,
        name: 'Iphone 7',
        status: true
      }
    ];
  }


  /*ngDoCheck: cứ mỗi lần gọi ngOnChanges() HOẶC ngOnInit() thì hàm ngDoCheck() sẽ đc gọi theo.  */
  ngDoCheck() {
    console.log('LifeCycle hook: ngDoCheck()');
  }


  /*Hàm này chỉ thực thi khi comp đang hiện rồi bị ẩn đi, mỗi lần ẩn comp đi là nó lại đc thực thi.
  Sử dụng ngIf kết hợp với biến isDestroy trong app.component.html giúp việc ẩn hiện comp đc thực hiện mỗi lần ấn button.*/ 
  ngOnDestroy() {
    console.log('LifeCycle hook: ngOnDestroy()');
  }


}
