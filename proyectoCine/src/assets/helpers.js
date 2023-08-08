export const types = {
  add: "add",
  remove: "remove",
  update : "update"
};

export const Funreducir = (state, action) => {


  if (action.type === types.add) {
  
      return [...state ,  action.paylodad]
  }
  if (action.type === types.remove) {
    console.log(action.paylodad);
    return state.filter((item) => item.id != action.paylodad.id);
  }



  //todo actualizar con Variabkes
  if ( action.type === types.update){

        return state.map((actualz) =>
          actualz.id === action.paylodad.id
            ? {
                ...item,
                nombre: (actualz.nombre = action.paylodad.nombre),
                cantidad: actualz.cantidad =  action.paylodad.cantidad,
            }
            : item
        );
  
  
    }
  return state;
};


export const initalStado = [
  {
    id: 1,
    nombre: "jorgue",
    cantidad: 20,
  },
  {
    id: 2,
    nombre: "Jhoantan",
    cantidad: 20,
  },
  {
    id: 3,
    nombre: "Milagros",
    cantidad: 20,
  },
  {
    id: 4,
    nombre: "Sonia",
    cantidad: 20,
  },
];
