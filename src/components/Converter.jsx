import React from "react";
import CurrencyInput from "./CurrencyInput";

const Converter = () => {
  const [amount1, setAmount1] = React.useState(0);
  const [amount2, setAmount2] = React.useState(0);
  const [currency1, setCurrency1] = React.useState("USD");
  const [currency2, setCurrency2] = React.useState("UAH");
  const [rates, setRates] = React.useState([]);

  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "qFVkG2SaRnayMHqZQHxYbN4IcUPEmJrB");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://api.apilayer.com/fixer/latest", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRates(result.rates)
      });
  }, []);

  React.useEffect(() => {
    if (!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  const current = new Date();
  const date = `${current.getDate()} / ${
    current.getMonth() + 1
  } / ${current.getFullYear()}`;

  return (
    <div className="container">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 py-7 w-4/5 rounded-3xl text-slate-700 px-4 shadow">
        <div className="flex flex-col lg:flex-row gap-3 justify-center">
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
          />
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
          />
        </div>
        <h3>Today's date</h3>
        <span className="font-bold">{date}</span>
      </div>
    </div>
  );
};

export default Converter;
