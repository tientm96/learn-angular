/*
FILE NÀY CHỈ ĐỂ NOTE LẠI CHO NHỚ, KO LIÊN QUAN GÌ ĐẾN CODE CẢ. XÓA FILE NÀY CŨNG ĐƯỢC.


DEPLOY : triển khai. 
Deploy trang web lên server nodejs, lên server php, hay github chuyên cho web tĩnh...

Bài này ko phải là lưu trữ source trên github rồi clone về là "learn-angular",
Còn phần deploy là dùng server của github để xây dựng web của mình thì tại: https://github.com/tientm96/tientm96.github.io/tree/master
----------------------


CÁCH LÀM: 
- Tại prj: terminal "ng build": tạo ra folder dist. folder này chứa tất cả các file code đã thu gọn/nén lại rồi, chỉ up lên folder dist này lên server github để deploy, nghĩa là đã up tất cả các code rồi.

- lên github, new repository: đặt tên là "tientm96.github.io" : đã tạo từ trước rồi (ép buộc là dạng tên này, mỗi tài khoản chỉ đc 1 đường dẫn để deploy thôi)

- kích create new file để tạo 1 file mới, mới có code để kéo thả code từ bên ngoài vào đc, vd như tạo 1 file readme, để cho repository mới tạo khỏi bị empty là đc.

-Push tất cả các file trong folder dist lên (tất cả những file trong cùng, nếu có folder trong dist thì cứ vô sâu nữa, rồi copy hết đống file đó):
+clone về, rồi copy qua, rồi push lên như bt làm cũng đc.

+hoặc cách khác là: chọn 1 nhánh nào đó, master chẳng hạn, rồi kéo thả tất cả file trong folder dist lên, rồi commit change là đc.

=>DEPLOY LÊN github đã xong. 

Lúc này chỉ cần chạy link: tientm96.github.io chính là trang web mà mình vừa deploy lên xong.

-------------------------

DEPLOY LÊN SERVER HEROKU CỦA NODEJS: 
http://online.khoapham.vn/nodejs/59-huong-dan-dua-ung-dung-nodejs-len-heroku.html

hướng dẫn gồm 3 videos: https://www.youtube.com/watch?v=FuwfQlE82qs&list=PLzrVYRai0riS8p8vCykFGuc-t4LWElV__

---------------------------

*/