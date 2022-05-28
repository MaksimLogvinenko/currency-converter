import React from "react";

const CurrencyInput = ({ amount, currency, currencies, onCurrencyChange, onAmountChange }) => {
  return (
    <div className="flex items-center justify-center mx-1 border px-3 p-3 shadow border-solid border-white rounded-3xl">
      <div className="flex flex-col">
        <h5>You Send</h5>
        <input
          className="bg-transparent outline-none font-bold text-2xl w-full"
          value={amount}
          onChange={(event) => onAmountChange(event.target.value)}
        />
      </div>
      <div>
        <img src="" alt="" />
        <select
          className="bg-transparent outline-none font-bold"
          value={currency}
          onChange={(event) => onCurrencyChange(event.target.value)}
        >
          {currencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyInput;
