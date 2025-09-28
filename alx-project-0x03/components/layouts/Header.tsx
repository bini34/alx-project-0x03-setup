import Link from "next/link";import Link from "next/link";

import Button from "../common/Button";import Button from "../common/Button";



const Header: React.FC = () => {const Header: React.FC = () => {

  return (  return (

    <header className="fixed w-full bg-white shadow-md">    <header className="fixed w-full bg-white shadow-md">

      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">

        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">

          Splash App          Splash App

        </Link>        </Link>

        {/* Button Group */}        {/* Button Group */}

        <div className="flex gap-4">        <div className="flex gap-4">

          <Button buttonLabel="Sign In" buttonBackgroundColor="red" />          <Button buttonLabel="Sign In" buttonBackgroundColor="red" />

          <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />          <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />

        </div>        </div>

      </div>      </div>

    </header>    </header>

  );  );

};};



export default Header;export default Header;

