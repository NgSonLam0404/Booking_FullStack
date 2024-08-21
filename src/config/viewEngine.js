// import express vào
// đầu tiên chúng ta tạo 1 function 
// dùng cú pháp của ES6 bởi vì các framework mới nhất đều ưu tiên bản mới nhất
// không dùng biến var : vì biến var sẽ có khả năng global 
// dùng biến let: vì biến let chỉ có phạm vi local tức là nằm trong file này thôi giúp chúng ta kiểm soát được nó nằm ở đâu 

import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"))
    // bắt buộc cấu hình để express hiểu được là lấy các file static ( ảnh, css,...) của server là chỉ được lấy trong folder public
    app.set("view engine", "ejs") //khai báo view engine có thể hiểu nó tương tự như jsp của java: cho phép code logic trong file html 
    app.set("views", "./src/view") // set đường link để lấy các view, bắt buộc viết trong folder view

}
// đây là arrow function
// muốn các file khác cũng sử dụng được function này thì cần phải exports nó:
module.exports = configViewEngine
