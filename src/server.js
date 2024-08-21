import express from "express"; // sử dụng framework gì thì phải luôn import vào
import bodyParser from "body-parser";
// ví dụ để có được đường link /user ?id=7 => để lấy được số 7 thì cần phải có body-parser
require('dotenv').config();
// khai báo để dùng được cậu lệnh process.env.tên biến

// import các hàm cần thiết 
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
import DB from "./config/connectDB";

//tạo biến app để kêu tới express() : instance của express là một thuật ngữ chỉ đối tượng được tạo từ một lớp hoặc một model
let app = express()

// cấu hình các tham số từ client gửi lên server với dạng json hoặc cần xử lý dữ liệu JSON trong các yêu cầu http 
// phải luôn có
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// config app: truyền đối tượng vào bên trong các hàm đã import
viewEngine(app);
initWebRoutes(app);
DB();



//để có thể chạy app cần dùng:
// lấy tham số PORT trong .env hoặc nếu trông .env không có thì nó sẽ chạy cổng 6969
let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log(" Server is runing:" + port)
})