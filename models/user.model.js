module.exports = (mongoose) => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          userid: { type: Number, require: true },
          email: { type: String, require: true, unique: true, dropDups: true },
          first_name: { type: String, require: true },
          last_name: { type: String, require: true },
          username: { type: String, require: true },
          contact: { type: String, require: true },
          password: { type: String, require: true },
          role: { type: String, default: "user" } /**types: admin, user */,
          isLoggedIn: Boolean,
          uuid: String,
          accesstoken: String,
          coupons:[{id: Number, discountValue: Number}],
          bookingRequests:[{reference_number:Number, coupon_code:Number,show_id:Number,tickets:[Number]}]
        },
        { timestamps: true }
      )
    );
  
    return User;
  };