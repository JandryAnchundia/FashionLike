import {Schema,model} from 'mongoose'
import bcrypt from 'bcryptjs';


const userSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    fecha_de_nacimiento:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:false
    }
},{
    versionKey:false,
    timestamps:true
})

userSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}
userSchema.methods.validatePassword = function(password){
    return bcrypt.compare(password,this.password)
}


export default model('User',userSchema)