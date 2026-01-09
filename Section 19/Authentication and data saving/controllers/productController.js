export const getProducts = async (req, res) => {
    try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&query=mens-watches"
        );
        const data = await response.json();
        const products = data.data;

        res.render('products', {
            products,
            user: req.session.userId || null
        });
    } catch (error) {
        res.render('errorpage', { message: 'Failed to load products' });
    }
};
