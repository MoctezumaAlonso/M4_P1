// Arreglo de objetos con los datos
const contactos = [
  { nombre: "Juan", puesto: "CEO", empresa: "ABC industries", correo: "juan123@correo.com", contacto: 7221565126 },
  { nombre: "María", puesto: "Vendedora", empresa: "ABC industries", correo: "mariafulanita@correo.com", contacto: 7225656784 },
  { nombre: "Pedro", puesto: "Desarrolaador", empresa: "ABC industries", correo: "pedrobot@correo.com", contacto: 72156846460 }
];

const generarTarjeta = ({ nombre, puesto, empresa, correo, contacto }) => `
╔══════════════════════════════════╗
║     Tarjeta de Presentación      ║
╠══════════════════════════════════╣
║ Nombre:  ${nombre}           
║ Puesto:  ${puesto}            
║ Empresa: ${empresa}  
║ Correo: ${correo}          
║ Contacto: ${contacto}        
╚══════════════════════════════════╝
`;

// Función flecha para recorrer el arreglo y mostrar las tarjetas
const mostrarTarjetas = (contactos) => {
  for (const contacto of contactos) {
    console.log(generarTarjeta(contacto)); // Llama a generarTarjeta y muestra la tarjeta
  }
};

// Llamar a la función para mostrar todas las tarjetas
mostrarTarjetas(contactos);