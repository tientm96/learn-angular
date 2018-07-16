const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();


/*cho phép url khác post dl lên đường dẫn của server. Ở đây đường dẫn của server là http://localhost:3000/, đường dẫn của angular là http://localhost:4200/ 
Nó sẽ cho phép 4200 khách gửi request đến 3000 của server.
*/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => res.send('Hello'));

app.post('/signin', jsonParser, (req, res) => {
    // res.send(req.body.name); //NẾU TEST VIỆC GỬI 1 ĐOẠN TEXT LÊN SERVER THÌ DÙNG DÒNG NÀY: vì nó chỉ gửi 1 text là name, chứ ko gửi nguyên object
    
    //Trường hợp nếu bên comp gửi tất cả giá trị input của form(trong html) lên thì ta dùng dòng sau (là gửi object).
    //Bên comp, khi gọi tới hàm onSubmit() thì nó sẽ gửi mọi input của form lên server.
    res.send(req.body);  
    
    //TEST LẤY BODY GỬI LÊN SERVER. NHƯNG CHỈ LOG RA TRONG TERMINAL, CHỨ KO LOG TRÊN F12. 
    console.log(req.body);
});

app.listen(3000, () => console.log('Server is running!'));