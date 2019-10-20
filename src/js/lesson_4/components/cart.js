// eslint-disable-next-line no-unused-vars
import {Component, renderDom} from '../fw';
// eslint-disable-next-line no-unused-vars
import InputNumber from  './input_number';

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.initState({
            products : [
                {price: 1000, rest: 10, current: 3},
                {price: 2000, rest: 5,  current: 2},
                {price: 5000, rest: 7,  current: 5}
            ]
        });
    }

    render() {
        const inputs = this.state.products.map((product, i) => {
            return  <InputNumber 
                        min="1" 
                        max={product.rest} 
                        value={product.current} 
                        change={this.onChangeProductCount.bind(this, i)} 
                        remove={this.removeProduct.bind(this, i)} />
        });

        return super.render(
            <div>
                { inputs }
                <hr/>
                <div>{this.state.products.reduce((total, item) => total + item.price * item.current, 0)}</div>
                <hr/>
                <input type="button" value="Add product" onclick={this.addProduct} />
            </div>
        );
    }

    onChangeProductCount(i, count) {
        this.state.products[i].current = count;
    }

    removeProduct = (i) => {
        this.state.products.splice(i, 1);
    }

    addProduct = () => {
        this.state.products.push({price: 1300, rest: 12,  current: 6});
    }
}

