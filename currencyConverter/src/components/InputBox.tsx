import { useId } from "react";

interface InputBoxProps {
  label: string;
  amount: number | string;
  onAmountChange?: (value: number) => void;
  onCurrencyChange?: (value: string) => void;
  currencyOptions?: string[];
  selectCurrency?: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
  className?: string;
}

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}: InputBoxProps) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label className="block text-black/40 mb-2 text-right">
          Currency Type
        </label>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} // normalize here
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value.toUpperCase())
          } //normalize input
        >
          <option value="">Select</option>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
