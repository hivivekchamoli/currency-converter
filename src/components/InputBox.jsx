import React, { useId } from "react";

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
}) {
    const amountInputId = useId();

    return (
        <div className={`p-3 rounded-lg text-sm flex items-end gap-3 border border-[#d6c892] ${className}`}>
            {/* Amount Input */}
            <div className="flex-1">
                <label
                    htmlFor={amountInputId}
                    className="text-gray-700 mb-1 block font-medium"
                >
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-white px-3 py-2 border border-[#d6c892] rounded-lg focus:ring-2 focus:ring-yellow-500"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            {/* Currency Select */}
            <div>
                <p className="text-gray-700 mb-1 font-medium">Currency</p>
                <select
                    className="rounded-lg px-3 py-2 border border-[#d6c892] bg-white cursor-pointer outline-none focus:ring-2 focus:ring-yellow-500"
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
