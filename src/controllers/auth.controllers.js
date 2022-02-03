import User from "../models/User";
import bcrypt from "bcryptjs";
import { sendMail, getTemplate } from "../config/mailer.config";

export const registro = async (req, res) => {
  const { nombre, apellido, fecha_de_nacimiento, email, password } = req.body;

  const user = new User({
    nombre,
    apellido,
    fecha_de_nacimiento,
    email,
    password,
  });

  user.password = await user.encryptPassword(user.password);

  const token = getToken(user.email);

  const html = getTemplate(user.nombre, token);

  await sendMail(user.email, "Mail de Prueba", html);

  await user.save();
  res.status(200).json({
    ok: true,
    message:
      "user create success,please check your email for validaction your email",
    user,
  });
};

export const login = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      //match user
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: "that email is not registered",
            });
          }
          //match pass
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "pass incorrect" });
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};

export const verifyEmail = async (req,res) => {

    const {token} = req.params
    if(!token) return res.status(400).json({ok:false,message:'invalid link'})

    const data = getTokenData(token)
    if(data === null){
        return res.status(404).json({ok:false,message:'Invalid data'})
    }
    
    const user = await User.findOne({data})
    console.log(user)
    if(user === null){
        return res.status(404).json({ok:false,message:'user not found'})
    }
    await User.updateOne({email:data.data,status:true})
    return res.redirect('/login')
}
