// // tạo function 
// import { any } from "sequelize/types/lib/operators";
import db from "../models/index"
import CRUDService from "../services/CRUDService"

//view của trang chủ
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        res.render('homepage', {
            data: data
        })

    } catch (e) {
        console.log(e);
    }
}
//view của about
let getAboutPage = (req, res) => {
    res.render('about')
}

//Create.1
// chuyển hướng đến form thêm mới khi nhấp vòa "thêm mới"
let getCRUD = (req, res) => {
    res.render('CRUD.ejs')
}
//Create.2
// xử lý việc lưu thông tin tạo mới và hiển thị ra lại
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message)
    res.redirect('/show-crud')
}

//Read
//xử lý việc hiển thị thông tin đã có trong database
let showCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();

    res.render('showCRUD.ejs', {
        data: data
    })
}

//Update.1
//lấy id từ data được trả về trong hàm showCRUD 
//gọi hàm getUserInfoById để tìm user đó
//đổ dữ liệu của user đó vào form edit của view editCRUD
let editCRUD = async (req, res) => {
    let userId = req.query.id
    if (userId) {

        let userData = await CRUDService.getUserInfoById(userId);
        res.render('editCRUD', {
            userData
        })

    } else {
        res.send("xinchao")
    }
}
//Update.2
//nhận dữ liệu sau khi ngươi dùng nhập vào form
// gọi đến hàm updateUserData truyên dữ liệu mới có vào và xử lý lưu trữ 
// hiển thị trở lại
let putCRUD = async (req, res) => {
    let data = req.body; // lấy tất cả các value có trong name input
    await CRUDService.updateUserData(data);
    res.redirect('/show-crud');
}

//Delete
//lấy id từ data được trả về trong show-crud và tìm nó 
// gọi deleteUserById và tiêng hành xóa user có id thỏa yêu cầu
// hiển thị dữ liệu trở lại
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    await CRUDService.deleteUserById(id);
    res.redirect('/show-crud');
}
//export homeController ra: 
module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    showCRUD,
    editCRUD,
    putCRUD,
    deleteCRUD
}