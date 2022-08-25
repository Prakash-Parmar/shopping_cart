import React, {Component} from "react";

class Counter extends Component { 
 

    render() { 
        // console.log(this.props);
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary"; 
      
        return (
        <div>
                <span className={classes}>{this.formateCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary m-2">Increment</button>
{/* next line */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button> 
            </div>);
    }

    formateCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;