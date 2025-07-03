import { UserModel } from "../models/User.js";
import nodemailer from "nodemailer"
import bcrypt from 'bcrypt';
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "elnuraas-bf206@code.edu.az",
        pass: "cdgy mqnm dvsi qmcn",
    },
});



const UserController = {
    getAll: async (req, res) => {
        let users = await UserModel.find()
        res.send(users)
    },
    register: async (req, res) => {
        let { email, password, name } = req.body

        let user = await UserModel.findOne({ email: email })
        if (user) {
            res.send("Bu user sistemde var")
        }
        else {
            let hashPassword = await bcrypt.hash(password, 10);
            let newUser = UserModel({
                name,
                password: hashPassword,
                email
            })
            await newUser.save()
            res.send(newUser)
        }

    },
    login: async (req, res) => {
        let { email, password } = req.body
        let user = await UserModel.findOne({ email: email })

        if (!user) {
            res.send("Register olmamısınız!")
        }
        else {
            let isTruePassword = await bcrypt.compare(password, user.password);
            if (!isTruePassword) {
                res.send("Password yanlışdır")
            } else {
                let confirmPassword = Math.floor(Math.random() * 999999)
                const info = await transporter.sendMail({
                    from: 'elnuraas-bf206@code.edu.az',
                    to: user.email,
                    subject: "Hello ✔",
                    text: "Hello world?", 
                    html: `<b>Confirm passwordunuz:${confirmPassword}</b>`,
                });

                console.log("Message sent:", info);

                user.confirmPassword=confirmPassword
                await user.save()
            }
           
        }
    },
    confirm:async (req,res) => {
        let {confirmPassword}=req.body
        let user = await UserModel.findOne({confirmPassword:confirmPassword})
        if(!user){
            res.send("confirm yanlisdir")
        }
        else{
            res.send(user)
        }

    }
  
}
export default UserController