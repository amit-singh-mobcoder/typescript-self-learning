class Sellable<T> {
    public cart : T[] = [];

    addToCart(item : T) {
        this.cart.push(item);
    }

}