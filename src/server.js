import express from "express"; // sử dụng framework gì thì phải luôn import vào
import bodyParser from "body-parser";
// ví dụ để có được đường link /user ?id=7 => để lấy được số 7 thì cần phải có body-parser
require('dotenv').config();
// khai báo để dùng được cậu lệnh process.env.tên biến

/*
1. Sử dụng framework gì thì phải luôn import vào : expressJS
2. Để lấy được value trong dữ liệu database cho các chức năng phải dùng body-parser vd: /user ?id=7 
3. lưu biến ở dotenv thì phải import vào
4. Dùng engine view và để nó nằm ở đầu để hiển thị dữ liệu ở Server nên phải import : đùng ejs
5. Để các đường đi của url ( routes ) ở đâu thì phải import
6. để phương thưc connect database ở đâu thì phải import
*/

// import các hàm cần thiết 
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import DB from "./config/connectDB";

let app = express();
/*
 express giống một cái nhà, và app là người giữ nhà, và mọi hoạt động của khách khi vào nhà đề phải thông qua chủ nhà là app
 */



/* 
ví dụ : 
khi nhập dữ liêu vào một form và bấm submit với method POST:
    - HTTP nhận được dữ liệu đó và để nó tồn tại dạng json
        +bodypaser.json(()): chuyển đổi nó thành dạng dữ liệu của Js
    - nếu dữ liệu nhận được là một dạng json lồng nhau thì để đọc được thành dạng object của JS:
        +bodypaser.urlencode({extended:true}):sẽ làm việc đó
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// config app: truyền đối tượng vào bên trong các hàm đã import
viewEngine(app);
initWebRoutes(app);
DB();

// lấy tham số PORT trong .env hoặc nếu trông .env không có thì nó sẽ chạy cổng 6969
let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log(" Server is runing:" + port)
})