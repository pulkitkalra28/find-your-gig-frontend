import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import useActive from '../../hooks/useActive';
import commonContext from '../../contexts/common/commonContext';


const ProductCard = (props) => {
    const navigate = useNavigate();
    const { setLoading } = useContext(commonContext);
    const { fullName, description, profilePicture, artistId, userId } = props;
    // const { addItem } = useContext(cartContext);
    // const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = props;
    // const { active, handleActive, activeClass } = useActive(false);


    // // handling Add-to-cart
    // const handleAddItem = () => {
    //     const item = { ...props };
    //     addItem(item);

    //     handleActive(id);

    //     setTimeout(() => {
    //         handleActive(false);
    //     }, 3000);
    // };

    // const newPrice = displayMoney(finalPrice);
    // const oldPrice = displayMoney(originalPrice);

    const handleInviteClick = () => {
        // opens reservation form
    }

    const handleCardClick = () => {
        navigate(`/profile?userId=${userId}`);
        setLoading(true);
      };


    return (
        <>
            <div className="card products_card">
                <figure className="products_img">
                    <img src={profilePicture} alt="product-img" onClick={handleCardClick} />
                </figure>
                <div className="products_details">
                    {/* <span className="rating_star">
                        {
                            [...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)
                        }
                    </span> */}
                    <h3 className="products_title" onClick={handleCardClick}>
                        {fullName}
                    </h3>
                    <h5 className="products_info">{description}</h5>
                    <div className="separator"></div>
                    {/* <h2 className="products_price">
                        {newPrice} &nbsp;
                        <small><del>{oldPrice}</del></small>
                    </h2> */}
                    <button
                        type="button"
                        className={`btn products_btn`}
                        onClick={handleInviteClick}
                    >
                        Invite
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;