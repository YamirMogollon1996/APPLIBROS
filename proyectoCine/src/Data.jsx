export const types = {

  
  add: "add",
  remove: "remove",
  removeone: "removeone",
  actual: "actual",
  aumentar: "aumentar",
  agregar: "agregar",
  borrardestorre: "borrardestorre",
};


export const FuncionReducir = (state, action) => {
  if (action.type == types.add) {
    const finlaidad = state.CART.find((item) => item.id === action.payload.id);
    if (!finlaidad) {
      return {
        ...state,
        CART: [
          ...state.CART,
          { ...action.payload, stock: 1, total: action.cantidad },
        ],
      };
    } else {
      alert("producto ay esta en el carttio ");
    }
  }
  if (action.type == types.actual) {
    return {
      ...state,
      ACTUAL: action.payload,
    };
  }

  if (action.type == types.remove) {
    return {
      ...state,
      CART: state.CART.filter((item) => item.id != action.payload.id),
    };
  }

  if (action.type == types.aumentar) {
    // const encontrar_Var =  state.product.find(item => item.id === action.payload.id)
    // console.log(encontrar_Var)

    return {
      ...state,
      product: state.product.map((item) =>
        item.id == action.payload.id
          ? {
              ...item,
              cantidad: (item.cantidad -= 1),
            }
          : item
      ),
      CART: state.CART.map((actaul) =>
        actaul.id == action.payload.id
          ? {
              ...actaul,
              stock: (actaul.stock += 1),
              total: actaul.stock * actaul.cantidad,
            }
          : actaul
      ),
    };
  }

  if (action.type == types.removeone) {
    const filter = state.CART.find((item) => item.id == action.payload.id);
    if (filter.stock > 1) {
      return {
        ...state,
        product: state.product.map((item) =>
          item.id == action.payload.id
            ? {
                ...item,
                cantidad: (item.cantidad += 1),
              }
            : item
        ),
        CART: state.CART.map((actaul) =>
          actaul.id == action.payload.id
            ? {
                ...actaul,
                stock: (actaul.stock -= 1),
                total: actaul.stock * actaul.cantidad,
              }
            : actaul
        ),
      };
    } else {
      return {
        ...state,
        CART: state.CART.filter((item) => item.id != action.payload.id),
      };
    }
  }


  if (  action.type == types.agregar) {
      // console.log(action.paylodad);
      return {
        ...state,
        product: [...state.product, action.paylodad],
      };

  }

  if ( action.type == types.borrardestorre ) { 

      return { 

        ...state , 
        product : state.product.filter(item => item.id != action.paylodad.id)
      }
  }
  return state;
};

export const Objetglobal = {
  product: [
    { id: 1, nombre: "TV", cantidad: 100 },
    { id: 2, nombre: "DVD", cantidad: 200 },
    { id: 3, nombre: "AUDIO", cantidad: 300 },
  ],
  ACTUAL: "",
  CART: [],
};
