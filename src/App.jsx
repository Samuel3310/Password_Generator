import { useState } from "react";
import Header from "./Header.jsx";
import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";

const App = () => {
  const sweetRef = useRef();
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isNumber, setisNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);

  function handleCopy() {
    window.navigator.clipboard.writeText(password);
    sweetRef.current.select();
  }

  const handleChange = useCallback(
    function handleChange() {
      let alPhabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const char = `!@#$%^&*()_+-=/'"`;
      const num = 1234567890;
      let result = "";

      for (let i = 1; i <= length; i++) {
        const calc = Math.floor(Math.random() * alPhabet.length);
        result += alPhabet.charAt(calc);

        if (isNumber) {
          alPhabet += num;
        }
        if (isCharacter) {
          alPhabet += char;
        }
      }
      setPassword(result);
      console.log(password);
    },
    [isNumber, length, isCharacter]
  );

  useEffect(() => {
    handleChange();
  }, [length, isNumber, isCharacter, handleChange]);

  return (
    <div className="bg-slate-500 w-full h-screen p-10 ">
      <div className="w-full max-w-xl p-4 mt-10 mx-auto bg-slate-200">
        <Header />

        <div className="">
          <div className="flex mt-4 p-2">
            <input
              type="text"
              readOnly
              className="p-4 w-full border border-slate-600  outline-none"
              value={password}
              ref={sweetRef}
            />
            <button
              className="px-5 py-4 bg-teal-500 text-2xl font-bold outline-none active:bg-teal-300"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>

          <div className="flex justify-between gap-8 px-2">
            <p className="flex gap-3  text-xl">
              {" "}
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="">Length {length}</label>
            </p>
            <p className="flex gap-3  text-xl">
              {" "}
              <input
                type="checkbox"
                defaultChecked={isNumber}
                onChange={() => setisNumber(!isNumber)}
              />
              <label htmlFor="">Numbers</label>
            </p>
            <p className="flex gap-3 text-xl">
              {" "}
              <input
                type="checkbox"
                defaultChecked={isCharacter}
                onChange={() => setIsCharacter(!isCharacter)}
              />
              <label htmlFor="">Characters</label>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
