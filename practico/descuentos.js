const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    console.log({price, discount});
    if (!price || !discount) {
        pResult.innerText = `Ingresa informacion numerica en los apartados correspondientes`;
        return;
    }
    if (discount > 100) {
        pResult.innerText = `Descuento no valido, no se puede regalar el producto. PAGA!!!`;
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = `El nuevo precio con descuento es $${newPrice}`;
}