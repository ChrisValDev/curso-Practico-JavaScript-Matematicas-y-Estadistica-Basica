const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    let discount;

    switch (coupon) {
        case 'JuanDC_es_Batman':
            discount = 25;
            break;
        case 'No_le_digas_a_nadie':
            discount = 30;
            break;
        default:
            pResult.innerText = `El cupon no es valido`;
            return;
    }

    // if (coupon == 'JuanDC_es_Batman') {
    //     discount = 25;    
    // } else if (coupon == 'No_le_digas_a_nadie') {
    //     discount = 30;
    // } else {
    //     pResult.innerText = `El cupon no es valido`;
    //     return;
    // }

    if (!price || !coupon) {
        pResult.innerText = `Ingresa informacion numerica en los apartados correspondientes`;
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = `El nuevo precio con descuento es $${newPrice}`;
}