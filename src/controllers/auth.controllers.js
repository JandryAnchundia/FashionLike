import User from '../models/User';
import bcrypt from 'bcryptjs';
import { sendMail } from '../config/mailer.config';

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
    await sendMail(user.email,'Mail de Prueba',`<h1>prueba</H1>`)
    await user.save()
    res.status(200).json({
        ok:true,
        message:'user create success,please check your email for validaction your email',
        user
    })

    
    
}

export const login = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'email'},(email,password,done)=> {
                //match user
                User.findOne({email : email})
                .then((user)=>{
                 if(!user) {
                     return done(null,false,{message : 'that email is not registered'});
                 }
                 //match pass
                 bcrypt.compare(password,user.password,(err,isMatch)=>{
                     if(err) throw err;

                     if(isMatch) {
                         return done(null,user);
                     } else {
                         return done(null,false,{message : 'pass incorrect'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}

