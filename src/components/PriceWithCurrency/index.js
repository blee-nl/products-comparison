import React from "react";
import PropTypes from "prop-types";

export const PriceWithCurrency = ({ price, locale, currency }) => {
  const maximumFractionDigits = 2;
  const defaultCurrency = "EUR";
  const number = parseFloat(price);

  const formattedPrice = number.toLocaleString(locale, {
    style: "currency",
    currency: currency?currency: defaultCurrency,
    maximumFractionDigits,
  });

  return <>{formattedPrice}</>;
};

PriceWithCurrency.propTypes = {
  locale: PropTypes.string,
  currency: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default PriceWithCurrency;
