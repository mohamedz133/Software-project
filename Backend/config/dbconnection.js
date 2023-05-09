import mongoose from "mongoose";

// Connect to DB
const dbconn = () => mongoose.connect(process.env.DB_URI).then(conn => {
    console.log(`DB connected with host: ${conn.connection.host}`);
})
.catch(err => {
    console.log(`DB connection failed: ${err}`);
    process.exit(1);
}
)

export default dbconn;
