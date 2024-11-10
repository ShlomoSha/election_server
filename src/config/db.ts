import { connect } from "mongoose"

const connectToMongo = async () => {
    try {
        await connect(process.env.DB_URI as string)
        console.log('connexted to mongo')
    } catch (err) {
        console.log("cno't connect to mongo", err)
    }
}

export default connectToMongo