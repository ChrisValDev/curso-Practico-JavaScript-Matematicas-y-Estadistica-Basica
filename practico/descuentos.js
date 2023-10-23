const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const couponsList = [];
couponsList.push({
    name: 'compraGrande',
    discount: 30,
});
couponsList.push({
    name: 'compraMedia',
    discount: 20,
});
couponsList.push({
    name: 'compraChica',
    discount: 10,
});

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        pResult.innerText = `Ingresa informacion numerica en los apartados correspondientes`;
        return;
    }

    let discount;
// couponElement es = a cada objeto dentro del array.
    function isCouponInArray(couponElement) {
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.filter(isCouponInArray);

    if (couponInArray.length > 0) {
        discount = couponInArray[0].discount;
    } else {
        pResult.innerText = 'El cupon no es valido';
        return;
    }

    console.log({
        coupon,
        discount,
        couponInArray,
        couponsList,
    });

    const newPrice = (price * (100 - discount)) / 100;
    console.log(newPrice);

    pResult.innerText = `El nuevo precio con descuento es $${newPrice}`;
}