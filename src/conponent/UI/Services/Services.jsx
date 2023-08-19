import React from "react";
import "./services.css";
import { motion } from "framer-motion";
import serviceData from "../../../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services_section">
      <div className="services_content">
        {serviceData.map((item, index) => (
          <div lg="3" md="4" key={index}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="services_item"
              style={{ background: `${item.bg}` }}
            >
              <span>
                <i className={item.icon}></i>
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
