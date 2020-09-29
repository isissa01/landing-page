import React from 'react';
import Card from '../components/Card';
import './Products.css';

function Products() {
    return (
        <div className="products">
            <h2>Pricing</h2>
            <div className="products_inner">
                <Card title="Starter" icon="https://www.iconsdb.com/icons/preview/white/fire-2-xxl.png" price="$8.99" transactions='100' cash_back='2' limit='$10,000 Limit' darkBg={false} ></Card>
                <Card title="Starter" icon="https://www.iconsdb.com/icons/preview/white/fire-2-xxl.png" price="$8.99" transactions='100' cash_back='2' limit='$10,000 Limit' darkBg={true} ></Card>
                <Card title="Starter" icon="https://www.iconsdb.com/icons/preview/white/fire-2-xxl.png" price="$8.99" transactions='100' cash_back='2' limit='$10,000 Limit' darkBg={false} ></Card>
            </div>
        </div>
    )
}

export default Products
