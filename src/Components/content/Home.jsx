import React from "react";
import "../../styles.css";
import ParticleBackground from "../../ParticleBackground";
import "../../tailwind.output.css";
import { motion } from "framer-motion";
import { Container } from "react-grid-system";

const Home = () => {
  return (
    <div className="bg-gray-800  ">
      <ParticleBackground className="mc" />
      <Container>
        <motion.h6
          className="mb text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 50, scale: 2 }}
        >
          Welcome to e-Sante
        </motion.h6>
      </Container>
    </div>
  );
};

export default Home;
