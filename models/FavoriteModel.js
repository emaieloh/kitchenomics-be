import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Energy = new Schema({
  label: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const FavoriteModel = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    healthLabels: {
      type: [String],
      required: true,
    },
    energy: {
      type: Energy,
      required: true,
    },
    servings: {
      type: Number,
      required: true,
    },
    totalNutrients: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Favorite = mongoose.model("Favorite", FavoriteModel);
export default Favorite;
