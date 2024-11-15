import Image from 'next/image';
import React from 'react';
import Avatar from '../../assets/images/Ellipse 12.png';
import Flag from '../../assets/images/flag.png';

interface CardProps {
  name: string;
  role: string;
  experience: string;
  skills: string[];
}

const Card: React.FC<CardProps> = ({ name, role, experience, skills }) => {
  return (
    <div className="bg-white rounded-md p-5 w-72">
      <div className="relative rounded-full w-28 h-28 mb-4 mx-auto">
        <Image src={Avatar} alt="Avatar" />
        <Image className="absolute bottom-1 right-1" src={Flag} alt="Flag" />
      </div>
      <h3 className="text-2xl text-[#24252F] font-black text-center">{name}</h3>
      <p className="text-base text-[#4A77FF] font-black text-center mt-1">
        {role} · {experience}
      </p>
      <div className="mt-10 flex justify-center gap-1 flex-wrap">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-base text-normalText font-black border border-[#C1C5CF] rounded-md py-1 px-2">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
