import React from "react";

const Step = (props: any) => {
  return (
    <div className="max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center">
      <img
        src={require(`../../assets/img/getting-started/${props.step.img}`)}
        className="max-w-[245px] mx-auto"
        alt=""
      />
     <h3 className="text-xl text-neutral-800 font-semibold">{props.step.title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">
        {props.step.description}
      </p> 
    </div>
  );
};

export default Step;
