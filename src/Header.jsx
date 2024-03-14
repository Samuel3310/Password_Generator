import Imght from "./assets/react.svg";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-10">
      <img src={Imght} alt="logo" className="w-20 object-contain" />
      <p className="text-center text-4xl font-bold">Password Generator</p>
    </header>
  );
};

export default Header;
