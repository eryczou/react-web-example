import { Component } from "react";
import axios from 'axios';

const get_product_url = 'http://localhost:8080/products/1'

class Product extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <div>
        Hello, my favourite brand is {this.state.name}
      </div>
    )
  }

  componentDidMount() {
    axios.get(get_product_url).then((res) => {
      this.setState(
        {
          name: res.data.name
        }
      )
    })
  }
}

export default Product