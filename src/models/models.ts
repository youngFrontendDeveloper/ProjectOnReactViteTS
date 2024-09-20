export interface ICartData {
    carts: ICart[] | undefined,
    limit: number,
    skip: number,
    total: number,

}

export interface ICart {
    "id": number,
    "products": IProduct[],
    "total": number,
    "totalProducts": number,
    "discountedTotal": number,
    "totalQuantity": number,
    "userId": number,
}

export interface IProducts {
    limit: number,
    products: IProduct[],
    skip: number,
    total: number,
}

export interface ICartProduct {
    "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total": number,
    "discountPercentage": number,
    "discountedTotal": number,
    "thumbnail": string,
    added: boolean,
}

export interface IProduct {
    availabilityStatus: string,
    brand: string,
    category: string,
    description: string,
    dimensions: { width: number, height: number, depth: number },
    discountPercentage: number,
    id: number,
    images: string[],
    // meta        :         {createdAt: '2024-05-23T08:56:21.619Z', updatedAt: '2024-05-23T08:56:21.619Z', barcode: '9444582199406', qrCode: 'https://assets.dummyjson.com/public/qr-code.png'}
    minimumOrderQuantity: number,
    price: number,
    rating: number,
    returnPolicy: string,
    reviews: {
        comment: string,
        date: string,
        rating: number,
        reviewerEmail: string,
        reviewerName: string,
    }[],
    shippingInformation: string,
    sku: string,
    stock: number,
    tags: string[],
    thumbnail: string,
    title: string,
    warrantyInformation: string,
    weight: number,
}