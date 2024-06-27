import mongoose from "mongoose";

export const connectDB = async () => {
  const encodedPassword = encodeURIComponent("#WM@b2000#");
  await mongoose
    .connect(
      `mongodb+srv://Wimukthi_Madushan:${encodedPassword}@cluster0.bx7cygb.mongodb.net/food-del`
    )
    .then(() => {
      console.log("DB Conected");
    })
    .catch((err) => {
      console.log(err);
    });
};
