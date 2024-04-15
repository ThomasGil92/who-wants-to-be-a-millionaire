describe('Cart management', () => {

    let cart : Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    it('an empty cart should cost nothing', () => {
        expectCartPrice(0);
    });

    it('a cart with one product should cost the product price', () => {
        cartWith(new OrderLine('SomeBook', 10));
        expectCartPrice(10);
    });

    it('a cart with several products should cost the sum of each product price', () => {
        cartWith(new OrderLine('SomeBook', 10),
            new OrderLine('Piano', 500));
        expectCartPrice(510);
    });

    it('should take into account the quantity of each product to price the cart', () => {
        cartWith(new OrderLine('SomeBook', 10, 2));
        expectCartPrice(20);
    });

    const expectCartPrice = (expectedPrice: number) => {
        expect(cart.price()).toBe(expectedPrice);
    }

    function cartWith(...orderLines: OrderLine[]) {
        for (const orderLine of orderLines) {
            cart.addOrderLine(orderLine);
        }
    }

});

class Cart {

    constructor(private readonly orderLines: OrderLine[] = []) {
    }

    addOrderLine(orderLine: OrderLine) {
        this.orderLines.push(orderLine);
    }

    price() {
        return this.orderLines.reduce((acc, orderLine) =>
            acc + orderLine.price(), 0);
    }
}

class OrderLine {
    constructor(private readonly _productName: string,
                private readonly _unitPrice: number,
                private readonly _quantity: number = 1) {
    }

    price() {
        return this._unitPrice * this._quantity;
    }
}
