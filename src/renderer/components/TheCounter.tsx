import React, { Component } from "react"
import mapState from "../utils/mapState"

export default mapState(
  class TheCounter extends Component<any, any> {
    onIncrementClick = () => {
      const { dispatch } = this.props
      dispatch({ type: "counter/INCREMENT" })
    }
    onDecrementClick = () => {
      const { dispatch } = this.props
      dispatch({ type: "counter/DECREMENT" })
    }
    render() {
      const { counter } = this.props
      const { count } = counter
      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={this.onIncrementClick}>Increment</button>
          <button onClick={this.onDecrementClick}>Decrement</button>
        </div>
      )
    }
  }
)
