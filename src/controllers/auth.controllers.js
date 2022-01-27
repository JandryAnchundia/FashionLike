import User from '../models/User';

export const registro = async(req,res) => {
    const {nombre,apellido,fecha_de_nacimiento,email,password} = req.body

    const user = new User({
        nombre,
        apellido,
        fecha_de_nacimiento,
        email,
        password
    })
    user.password = await user.encryptPassword(user.password)
    await user.save()
    res.status(200).json({
        ok:true,
        message:'user create success',
        user
    })
}

