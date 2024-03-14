import PropTypes from 'prop-types';

const Item = ({ cartItem }) => {
    console.log(cartItem);
    const { description, name, image_link } = cartItem;

    return (

        // <div className='border-2 rounded-2xl flex-row'>
        //     <div className='rounded-t-2xl h-36' >
        //         <img src={image_link} alt="" />
        //     </div>

        //     <div className=' bg-slate-400 h-1/3'>
        //         <h1>Name:{name}</h1>
        //         <h2>Descriptio {description}</h2>
        //     </div>
        // </div>

        <div className="card bg-base-100 shadow-xl rounded-2xl">
            <figure className='h-96 flex justify-center'>
                <img className='w-full rounded-t-2xl' src={image_link} alt="Shoes" />
            </figure>
            <div className="card-body p-5 ">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='my-2'>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-red-300 p-2 rounded-lg">Buy Now</button>
                </div>
            </div>
        </div>


    );
};

Item.propTypes = {
    cartItem: PropTypes.object.isRequired
};

export default Item;
