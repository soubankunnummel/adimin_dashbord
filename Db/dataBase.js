import mongoose from 'mongoose'


const connectDatabase = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONOG_DB)
        console.log('MongoDB Connected: ', connect.connection.host);
    } catch (error) {
        console.log(error)
    }
}

export default connectDatabase