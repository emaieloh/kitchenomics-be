import Favorite from "../models/FavoriteModel.js";
import User from "../models/UserModel.js";

export const getFavorites = async (req, res) => {
  try {
    const { user } = req.params;
    const favorite = await Favorite.find({ user });
    res.send(favorite);
  } catch (err) {
    res.send(err);
  }
};

export const addFavorite = async (req, res) => {
  try {
    const {
      user,
      label,
      image,
      href,
      healthLabels,
      energy,
      servings,
      totalNutrients,
    } = req.body;

    const favorite = new Favorite({
      user,
      label,
      image,
      href,
      healthLabels,
      energy,
      servings,
      totalNutrients,
    });

    await favorite.save();

    const loggedinUser = await User.findOne({ _id: user });
    loggedinUser.favorites.push(favorite._id);

    await loggedinUser.save();

    res.send(favorite);
  } catch (err) {
    res.send(err);
  }
};

export const deleteFavorite = (req, res) => {
  try {
    const { favoriteId, user } = req.params;
    Favorite.deleteOne({ _id: favoriteId }, (err, doc) => {
      User.findOneAndUpdate(
        { _id: user },
        { $pull: { favorites: favoriteId } },
        { new: true, useFindAndModify: false },
        (err, doc) => {
          res.send(doc);
        }
      );
    });
  } catch (err) {
    res.send(err);
  }
};
