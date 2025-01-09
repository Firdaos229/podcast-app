import React from 'react';

interface ServiceTitleProps {
  subtitle: string;
  title: string;
}

const ServiceTitle: React.FC<ServiceTitleProps> = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-12">
      <div className="text-lg font-semibold text-[#746bd8]">{subtitle}</div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  );
};

export default ServiceTitle;
