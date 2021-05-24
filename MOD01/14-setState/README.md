# react-webpack5
react-webpack5

## Create a webpack

npx webpack

https://webpack.js.org/concepts/


### Estado da Aplicação

this.state está o estado da aplicação


## Lifecycle

### mounting / ummounting

  componentWillMount não manipula DOM

  componentDidMount manipula DOM

  componentWillUnmount

### updating 

  componentWillReceiveProps(nextProps)
  
  shouldComponentUpdate(nextProps, nextState) => bool
  
  componentWillUpdate(nextProps, nextState)
  
  componentDidUpdate(prevPros, prevState)


### #comofaz? 

- ajax?
- outras libs que modificam o DOM?
- statefull x stateless
- smart x dumb?
- container x presentational?
