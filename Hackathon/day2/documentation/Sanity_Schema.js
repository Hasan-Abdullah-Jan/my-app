//Product Schema

export default {
    name: 'product',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price (per day)' },
      { name: 'stock', type: 'number', title: 'Available Stock' },
      { name: 'category', type: 'string', title: 'Category' },
      { name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' },
    ],
  };
  
  // Order Schema

  
    name: 'order',
    type: 'document',
    fields: [
      { name: 'customerId', type: 'string', title: 'Customer ID' },
      { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Products' },
      { name: 'rentalDuration', type: 'string', title: 'Rental Duration' },
      { name: 'status', type: 'string', title: 'Order Status' },
    ],
  
  