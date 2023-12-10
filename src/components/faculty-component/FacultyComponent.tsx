import { CheckIcon } from "@heroicons/react/24/solid";
import engineering_faculty from "@assets/Images/faculty-engineering.png";
import { Link } from "react-router-dom";

type Props = {
  image: any;
  heading: string;
  features: any;
};

const FacultyComponent = (props: Props) => {
  return (
    <div className="col-span-1 content-center justify-center flex flex-row items-center space-x-8 bg-white p-8 rounded-tl-[50px] rounded-br-[50px]">
      <img src={props.image} alt="engineering faculty" className="h-20 w-20" />
      <div className="flex flex-col space-y-4">
        <p className="text-slate-900 font-bold">{props.heading}</p>
        {props.features.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-row items-center space-x-1 text-slate-500"
          >
            <CheckIcon height={16} width={16} />
            <p className="text-sm font-medium">{item}</p>
          </div>
        ))}

        <Link to='/programs' className="text-pink-600 hover:text-pink-700 underline text-sm font-medium">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default FacultyComponent;
