import User from "../models/User.js";

export const addToCart = async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    const { productId } = req.body;
    const user = await User.findById(req.session.userId);

    const existingItem = user.cart.items.find(
        item => item.productId === productId
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        user.cart.items.push({ productId, quantity: 1 });
    }

    await user.save();
    res.redirect('/products');
};
