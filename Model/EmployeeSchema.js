import mongoose, { Schema } from "mongoose";

const Employee = Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, email:true },
  phone: { type: Number, required: true },
  desigination: {
    type: String,
    enum: ["HR", "Manager", "sales"],
    required: true,
  },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  coures: { type: String, enum: ["MCA", "BCA", "BSC"], required: true },
  image: { type: String },
  public_id:{type:String, required:true},

},{
  timestamps: true,
}
);
const EmployeeModel = mongoose.model("Employee", Employee)
export default EmployeeModel