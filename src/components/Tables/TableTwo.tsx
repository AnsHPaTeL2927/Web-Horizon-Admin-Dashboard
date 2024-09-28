import { Product } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';

// Approximate conversion rate from USD to INR
const conversionRate = 82;

// Modify prices as per the requirement
const productData: Product[] = [
  {
    image: ProductOne,
    name: 'Periodic Service',
    category: 'Regular maintenance to keep your vehicle in top condition.',
    price: (296 * conversionRate).toFixed(2), // Converted to INR
    sold: 22,
    profit: 45,
  },
  {
    image: ProductTwo,
    name: 'Batteries',
    category: 'Battery testing, replacement, and maintenance services.',
    price: (546 * conversionRate).toFixed(2), // Converted to INR
    sold: 12,
    profit: 125,
  },
  {
    image: ProductThree,
    name: 'Insurance Claims',
    category: 'Assistance with insurance claims and documentation.',
    price: (443 * conversionRate).toFixed(2), // Converted to INR
    sold: 64,
    profit: 247,
  },
  {
    image: ProductFour,
    name: 'Car Inspections',
    category: 'Thorough inspections to ensure your car safety.',
    price: (499 * conversionRate).toFixed(2), // Converted to INR
    sold: 72,
    profit: 103,
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Services
        </h4>
      </div>

      <div className="grid grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
        <div className="flex items-center">
          <p className="font-medium">Service</p>
        </div>
        <div className="flex items-center">
          <p className="font-medium">Description</p>
        </div>
        <div className="flex items-center ml-4"> {/* Added margin-left for spacing */}
          <p className="font-medium">Price (INR)</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="flex items-center">
            <p className="text-sm text-black dark:text-white">{product.name}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-black dark:text-white">{product.category}</p>
          </div>
          <div className="flex items-center ml-4"> {/* Added margin-left for spacing */}
            <p className="text-sm text-black dark:text-white">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
