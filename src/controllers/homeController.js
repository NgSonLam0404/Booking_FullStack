// tạo function 
import db from "../models/index"

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
let getAboutPage = (req, res) => {
    res.render('about')
}

//export homeController ra: 
module.exports = {
    getHomePage,
    getAboutPage
}