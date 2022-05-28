import React from "react";
import axios from "axios";

import UsFlag from "../assets/img/US.svg";
import EuFlag from "../assets/img/EU.svg";

const Header = () => {
  const [usdCurr, setUsdCurr] = React.useState("");
  const [eurCurr, setEurCurr] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
      .then((respons) => {
        setUsdCurr(`${respons.data[0].buy} / ${respons.data[0].sale}`);
        setEurCurr(`${respons.data[1].buy} / ${respons.data[1].sale}`);
      });
  }, []);

  const headerCurrency = [
    { flag: UsFlag, name: "USD", curr: usdCurr },
    { flag: EuFlag, name: "EUR", curr: eurCurr },
  ];

  return (
    <header>
      <nav className="flex flex-col lg:flex-row items-center justify-between p-10">
        <a href="/" className="font-bold text-xl">
          Converter GPay
        </a>
        <div className="flex flex-col lg:flex-row">
          {headerCurrency.map((item) => (
            <div key={item.name} className="flex items-center font-bold mr-8">
              <img className="mr-3" src={item.flag} alt={item.name} />
              <h3 className="mr-3">{item.name}</h3>
              <span>{item.curr}</span>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
