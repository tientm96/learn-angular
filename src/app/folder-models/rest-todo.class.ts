export class RestTodo {
    public id : number;
    public title : string;
    public completed : boolean;

    //Vì id trong api sẽ tự động tăng, nên ta ko cần quan tâm.

    //Xem cách tạo api giả lập trên mockapi.io tại: https://www.youtube.com/watch?v=puaaPncTAoQ&list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp
    //(trên mockapi.io đăng nhập với tientm96@gmail.com, thấy id đc tạo kiểu Object ID là kiểu tự động tăng, nên ở đây chỉ cần truyền vào 2 cái còn lại là đủ.)

    // constructor(id: number, title : string, completed : boolean){
    constructor(title : string, completed : boolean){
        this.title =  title;
        this.completed = completed;
    }
}
