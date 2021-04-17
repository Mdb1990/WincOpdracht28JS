/** @format */

const ageCheck = function (input) {
  if (input >= 18) {
    return true;
  }
};

const adultCheck = function (ageInput) {
  if (ageCheck(ageInput) == true) {
    return "Hello there";
  } else {
    return "Hey kiddo";
  }
};

console.log(adultCheck(18));

// baseprice keer 0.21 geeft value added taxes
const vatSom = function (basePrice, vatPerc) {
  return basePrice * vatPerc;
};

//console.log(vatSom(1000, 0.21));

const vatTotaal = function (basePrice, vatPerc) {
  const vatCalc = vatSom(basePrice, vatPerc);
  const totalPriceVat = vatCalc + basePrice;
  return totalPriceVat;
};

//console.log(vatTotaal(2, 0.09));

const vatSplit = function (priceVat, vatPercentage) {
  const totalBase = priceVat / vatPercentage;
  return totalBase;
};

const vatS = function (priceVat, vatPercentage) {
  const vatSum = vatPercentage - 1;
  return vatSum;
};

const baseSplit = function (priceVat, vatPercentage) {
  const BasePrice = vatSplit(priceVat, vatPercentage);
  const vatPrice = vatS(priceVat, vatPercentage);
  const listVatPrice = [];
  listVatPrice.push(BasePrice);
  listVatPrice.push(vatPrice);
  console.log(listVatPrice);
};

console.log(baseSplit(1210, 1.21));
