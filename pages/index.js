import { useState } from 'react';
import { ProductCard } from '@/components/index';
import MovingCloud from '/components/MovingCloud.js';
import products from 'products';

export default function Home() {
    const [disabled, setDisabled] = useState(false);

    // Group products by category
    const productsByCategory = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <div className="container xl:max-w-screen-xl xl:max-w-screen-xl mx-auto py-0 px-6 md:px-[5rem]">
            {Object.entries(productsByCategory).map(([category, categoryProducts], index) => (
                <div key={category}>
                    <div className="container xl:max-w-screen-xl px-0 text-3xl md:text-5xl" style={{ paddingTop: '30px' }}>
                        <b className="relative uppercase" style={{ fontFamily: 'Areeeb', paddingTop: '10px', lineHeight: '0.7' }}>
                            {category}
                        </b>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8">
                            {categoryProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    disabled={disabled}
                                    onClickAdd={() => setDisabled(true)}
                                    onAddEnded={() => setDisabled(false)}
                                    {...product}
                                />
                            ))}
                        </div>
                        <MovingCloud/>
                    </div>

                </div>
            ))}
        </div>
    );
}
