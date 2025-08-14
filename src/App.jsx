import { useState } from "react";
import currencyBackground from "./assets/currency.jpg";
import InputBox from "./components/InputBox";
import useCurrrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const BackgroundImage = currencyBackground;
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative p-4"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
            }}
        >
            {/* Light blur overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

            {/* Main Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center w-full">
                {/* Main Card */}
                <div className="bg-[#f9f5e7] rounded-lg shadow-xl p-6 w-full max-w-md space-y-6 border border-[#e6d8b4]">
                    <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-yellow-600 to-yellow-800 text-transparent bg-clip-text drop-shadow-sm">
                        💱 Currency Converter
                    </h1>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                        className="space-y-4"
                    >
                        {/* From Amount */}
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            className="bg-white"
                        />

                        {/* Swap Button */}
                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={swap}
                                className="px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition"
                            >
                                Swap
                            </button>
                        </div>

                        {/* To Amount */}
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            className="bg-white"
                        />

                        {/* Convert Button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition"
                        >
                            Convert {from.toUpperCase()} → {to.toUpperCase()}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="mt-6 text-sm text-gray-700 text-center bg-white/70 px-4 py-2 rounded-full shadow-sm border border-gray-300">
                    Made by <span className="font-semibold">Vivek Chamoli</span>
                </p>
            </div>
        </div>
    );
}

export default App;
