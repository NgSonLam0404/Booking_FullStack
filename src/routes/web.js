// là nơi mà mỗi làn truy cập vòa 1 đường link của web thì nó sẽ chạy vào route.js này đầu tiên
// import controller vào đây
import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router(); // sử dụng express để tạo một biến router ( người dẫn đường )

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage) // khai báo một router , hoặc là đã tạo được một đường link
    router.get('/about', homeController.getAboutPage)




    return app.use("/", router)
    // hiểu là web sẽ bắt đầu bằng dấu / và nó sẽ sử dụng tất cả các file router mà mình sẽ khai báo, dùng để tạo api trong tương lai
}
// tất cả các routes viết tạo đây
// truyền vào một app , có thể hiểu là app là web của mình, và web sẽ yêu cầu làm gì đó trong hàm
// và phải export function ra để các file khác dùng được function này

module.exports = initWebRoutes