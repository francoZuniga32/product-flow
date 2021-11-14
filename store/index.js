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
    flujos:[],
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
      state.flujos.push(flujo);
    },
    addProceso1(state, proceso){
      state.proceso1.push(proceso);
      state.flujos[proceso.flujoid].p1 = state.proceso1.length -1;
    },
    addProceso2(state, proceso){
      state.producto2.push(proceso);
      state.flujos[proceso.flujoid].p2 = state.proceso2.length -2 ;
      if(proceso.reprocesar){
        
      }else{
        
      }
    }
  }