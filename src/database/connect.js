const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@curso-nodejs.ybfy79g.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(error);
      }

      console.log("Conectado com o banco de dados");
    }
  );
};

module.exports = connectToDatabase;
