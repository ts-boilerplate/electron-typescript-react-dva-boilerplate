export default {
  namespace: "counter",
  state    : {
    count: 0,
  },
  reducers: {
    INCREMENT: state => ( { ...state, count: state.count + 1 } ),
    DECREMENT: state => ( { ...state, count: state.count - 1 } )
  },
  effects: {}
}
