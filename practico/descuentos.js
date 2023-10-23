const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const couponsObj = {
    'compraGrande': 30,
    'compraMedia': 20,
    'compraChica': 10,
};

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        pResult.innerText = `Ingresa informacion numerica en los apartados correspondientes`;
        return;
    }

    let discount;

    if (couponsObj[coupon]) {
        discount = couponsObj[coupon];
    } else {
        pResult.innerText = `El cupon no es valido`;
        return;
    }
    const newPrice = (price * (100 - discount)) / 100;
    console.log(newPrice);

    pResult.innerText = `El nuevo precio con descuento es $${newPrice}`;
}