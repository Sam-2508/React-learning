import { useEffect, useState } from "react";

type Rates = Record<string, number>;

function useCurrencyInfo(currency: any): Rates {
  const [data, setData] = useState({});
  const temp = currency.toUpperCase();
  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${temp}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates));
  }, [currency]);
  console.log(currency, data);
  return data;
}

export default useCurrencyInfo;
