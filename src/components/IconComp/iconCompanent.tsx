import React from "react";
import { IconType } from "react-icons";
import "../../pages/homepage/homepage.css"
interface ServiceIconProps {
  icon: IconType;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon: Icon }) => (
  <div className="service-icon">
    <Icon className="service-item-icon" />
  </div>
);

export default ServiceIcon;
