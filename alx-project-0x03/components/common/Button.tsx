import { ButtonProps } from "@/interfaces";import { ButtonProps } from "@/interfaces";



const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {

  const backgroundColorClass = buttonBackgroundColor ? {  const backgroundColorClass = buttonBackgroundColor ? {

    red: 'bg-red-500',    red: 'bg-red-500',

    blue: 'bg-blue-500',    blue: 'bg-blue-500',

    orange: 'bg-orange-500',    orange: 'bg-orange-500',

    green: 'bg-green-500',    green: 'bg-green-500',

  }[buttonBackgroundColor] : 'bg-slate-500';  }[buttonBackgroundColor] : 'bg-slate-500';



  return (  return (

    <button onClick={action} className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}>    <button onClick={action} className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}>

      {buttonLabel}      {buttonLabel}

    </button>    </button>

  );  );

};};



export default Button;export default Button;

