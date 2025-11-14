import OrderContext from './OrderContext';
import { useContext } from 'react';

function ShoeSize() {

    const { dataSize, selectedSize, handleSelect } = useContext(OrderContext);


    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {dataSize.sizes.map((size) => (
                <button
                    key={size}
                    onClick={() => handleSelect(size)}
                    className={`btn m-1 ${selectedSize === size
                            ? "btn-success text-white"
                            : "btn-outline"
                        }`}
                >
                    {size}
                </button>
            ))}
        </div>
    )
}

export default ShoeSize