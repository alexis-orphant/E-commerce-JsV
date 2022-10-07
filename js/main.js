// variables
const divContenedor = document.querySelector("#mostrarProductos");
const cart = document.querySelector("#cart");
const aside = document.querySelector("#aside");
const close = document.querySelector("#close");
const btnDarkMode = document.querySelector("#btnDarkMode");
const header = document.querySelector("#header");
const section = document.querySelector("#section");

const arrayProductos = []

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json.map((producto) => arrayProductos.push(new Productos(producto.id,producto.title,producto.image,producto.price,producto.description,producto.category))))
    .then((res) => {
        // recorremos cada producto
        for (const producto of arrayProductos) {
            // creamos una tarjeta por cada producto
            const tarjeta = document.createElement("div");
            tarjeta.className =
                "mx-auto w-72 min-h-[10rem] bg-white shadow-lg shadow-black rounded-lg";
            tarjeta.innerHTML = `
            <div class="w-1/2 mx-auto pt-4">
            <img class="object-cover " src=${producto.image} alt=${producto.title}>
            </div>
                <div class="p-5 flex flex-col gap-3">
                    <!-- nombre del producto -->
                    <h2 class="font-semibold text-2xl overflow-wllipsis overflow-hidden text-center ">${producto.title}</h2>
                    <!-- precio -->
                    <div class="mx-auto">
                        <h2 class="text-xl font-bold text-center pb-4 ">
                            Precio: $${producto.price}
                        </h2>
                        <button id=btn-${producto.id} class="mx-auto bg-red-400 p-2 rounded-xl btn-carrito">
                            Agregar al carrito
                        </button>
                    </div>
                </div>`;

                // agregamos las tarjetas al html
            divContenedor.append(tarjeta);

                // selecion del btn de agregar al carrio
            const btnAgregarC = document.getElementById(`btn-${producto.id}`);
            // evento de agregar al carrito
            btnAgregarC.addEventListener("click", () => {console.log(producto.id)} );

        }
        
    });



// eventos para mostrar el aside del carrito
cart.addEventListener("click", () => {
    
        aside.classList.toggle("hidden")
    
})
close.addEventListener("click", () => {
    aside.classList.toggle("hidden")
})

// evento para cambiar dark / ligth mode
btnDarkMode.addEventListener("click", () => {
    console.log("hola")

    section.classList.toggle("sectionDark");
    aside.classList.toggle("fondo-asideB");
    header.classList.toggle("sectionDark");

})
