const moment = require("moment");
/**@abstract
 *  D-Task: 
Shunday class tuzing tuzing nomi Shop, va uni 
constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin,
biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

MASALAN: const shop = new Shop(4, 5, 2); 
shop.qoldiq() return hozir 20:40da 4ta non, 
5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & 
shop.qabul('cola', 4) & shop.qoldiq() 
return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
 
 */

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    return `hozir soat ${moment().format("HH:mm")} da sizda ${
      this.non
    } ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola bor`;
  }

  sotish(product, value) {
    if (this[product] >= value) {
      this[product] -= value;

      return `siz hozir soat ${moment().format(
        "HH:mm"
      )} da ${value} ta ${product} sotdingiz`;
    } else {
      return "sizda sotishga yetarli mahsulot yoq";
    }
  }

  qabulQilish(product, value) {
    this[product] += value;
    return `Hozir soat ${moment().format(
      "HH:mm"
    )} da ${value} ta ${product} qabul qildingiz`;
  }
};

const shop = new Shop(5, 5, 5);
console.log(shop.qoldiq()); // Birinchi qoldiqni ko'rish

console.log(shop.sotish("non", 3));

console.log('========================');
console.log(shop.sotish("lagmon", 2));

console.log('========================');
console.log(shop.sotish("cola", 1));

console.log('========================');
console.log(shop.qabulQilish("non", 8));

console.log('========================');
console.log(shop.qabulQilish("lagmon", 8));

console.log('========================');
console.log(shop.qabulQilish("cola", 8));

console.log('========================');
console.log(shop.qoldiq());


