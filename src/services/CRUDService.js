import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import db from '../models/index'
import { where } from 'sequelize';

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBycrypt = await hashUserPassword(data.passowrd);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBycrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                andress: data.andress,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                phoneNumber: data.phoneNumber,
            })
            resolve('Created New User success')

        } catch (e) {
            reject(e)
        }
    })

}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync("password", salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}
let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true
            });
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })

}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
            })
            if (user) {
                resolve(user)
            } else {
                resolve([])
            }

        } catch (e) {
            reject(e)
        }
    })

}
let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.firstName = data.firstName,
                    user.lastName = data.lastName,
                    user.andress = data.andress;
                await user.save();
                resolve();
            } else {
                resolve();
            }
        } catch (e) {
            reject(e)

        }
    })
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, rejec) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                await user.destroy();
                resolve();
            }
        } catch (e) {
            reject(e)

        }
    })


}


module.exports = {
    createNewUser,
    getAllUser,
    getUserInfoById,
    updateUserData,
    deleteUserById
}

