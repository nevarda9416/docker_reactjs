import { FC } from "react";
import { Product } from "../../models/Product";
import RatingStar from "../RatingStar";
import { addToCart } from "../../redux/features/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Price from "../section/Price";
import useAuth from "../../hooks/useAuth";

const ProductCard: FC<Product> = ({ id, price, thumbnail, title, category, rating, discountPercentage }) => {
    const dispatch = useAppDispatch();
    const { requireAuth } = useAuth();
    const addCart = () => {
        requireAuth(() => {
            dispatch(
                addToCart({
                    id,
                    price,
                    title,
                    category,
                    rating,
                    thumbnail,
                    discountPercentage,
                })
            );
            toast.success("item added to cart successfully", {
                duration: 3000,
            });
        });
    };
    const classAddCartBtnName = `add-cart-btn-${id}`;
    return (
        <div className="border border-gray-200 font-lato" data-test="product-card">
            <div className="text-center border-b border-gray-200">
                <Link to={{ pathname: `/product/${id}` }}>
                    <img src={thumbnail} alt={title} className="inline-block h-60 transition-transform duration-200 hover:scale-110" />
                </Link>
            </div>
            <div className="px-4 pt-4">
                <p className="text-gray-500 text-[14px] font-medium dark:text-white">
                    {category}
                </p>
                <Link className="font-semibold hover:underline dark:text-white overflow-hidden text-ellipsis whitespace-nowrap block" to={{ pathname: `/product/${id}` }} title={title}>
                    {title}
                </Link>
            </div>
            <div className="px-4">
                <RatingStar rating={rating} />
            </div>
            <div className="flex flex-wrap items-center justify-between px-4 pb-4">
                {discountPercentage && (
                    <Price discountPercentage={discountPercentage} price={price} />
                )}
                <button type="button" className="flex items-center space-x-2 hover:bg-blue-500 text-white py-2 px-4 rounded bg-pink-500"
                    onClick={addCart} data-test={classAddCartBtnName} title="ADD TO CART">
                    <AiOutlineShoppingCart />
                </button>
            </div>
        </div >
    );
};
export default ProductCard;