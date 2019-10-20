// eslint-disable-next-line no-unused-vars
import {Component, renderDom} from '../fw';

export default class InputNumber extends Component {
    constructor(props) {
        super(props);

        this.onChange = ('change' in props) ? props.change : function() {};
        this.onRemove = ('remove' in props) ? props.remove : function() {};
    }

    render() {

        return super.render(
            <div>
                <input type="button" value="-" onclick={() => {this._setValue(parseInt(this.props.value)-1)}} />
                <input type="text" className="inputNum__value" value={this.props.value} 
                    onchange={(e) => {this._setValue(e.target.value)}} />
                <input type="button" value="+" onclick={() => {this._setValue(parseInt(this.props.value)+1)}} />
                <input type="button" value="x" onclick={() => {this.onRemove()}} />
            </div>
        );
    }

    _setValue(value) {
        let v = parseInt(value);
        if (isNaN(v) || v < this.props.min) {
            v = this.props.min;
        } else if (v > this.props.max) {
            v = this.props.max;
        }
        this.onChange(v);
        return v;
    }

}