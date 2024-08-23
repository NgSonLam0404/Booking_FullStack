// là nơi mà mỗi làn truy cập vòa 1 đường link của web thì nó sẽ chạy vào route.js này đầu tiên
// import controller vào đây
import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router(); // sử dụng express để tạo một biến router ( người dẫn đường )

let initWebRoutes = (app) => {

    //Create
    router.get('/crud', homeController.getCRUD)
    router.post('/post-crud', homeController.postCRUD)

    //Read
    router.get('/show-crud', homeController.showCRUD);

    //Update
    router.get('/edit-crud', homeController.editCRUD);
    router.post('/put-crud', homeController.putCRUD);

    //Delete
    router.get('/delete-crud', homeController.deleteCRUD);
    // phải dùng post trong trường hợp này vid delet-crud được đặt trong thẻ a trong file ShowCRUD.ejs, vì mặc định nhấn vào thẻ a thì là method GET

    router.get('/', homeController.getHomePage)
    router.get('/about', homeController.getAboutPage)


    return app.use("/", router)
}
/*
1. tất cả các routes viết tạo đây
2. truyền vào một app , có thể hiểu là app là web của mình, và web sẽ yêu cầu làm gì đó trong hàm
và phải export function ra để các file khác dùng được function này
3. hiểu là web sẽ bắt đầu bằng dấu / và nó sẽ sử dụng tất cả các file router mà mình sẽ khai báo, dùng để tạo api trong tương lai
*/
module.exports = initWebRoutes