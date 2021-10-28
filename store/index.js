export const state = () => ({
    productos: [],
    encargados: [{
      value: 0,
      text: "franco"
    },{
      value: 1,
      text: "dante guiliano"
    }],
    entradas: [],
    salidas:[],
    flujo:[],
    proceso1:[],
    proceso2:[],
    proceso3:[],
    proceso4:[],
    proceso5:[],
  })
  
  export const mutations = {
    addProducto(state, product) {
      state.productos.push(product);
    },
    addEntrada(state, entrada) {
      state.entradas.push(entrada);
    },
    addSalida(state, salida){
      state.salidas.push(salida);
    },
    addFlujo(state, flujo){
      state.flujo.push(flujo);
    }
  }