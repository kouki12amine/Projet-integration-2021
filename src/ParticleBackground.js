import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./config/particlesConfig";

export default function ParticleBackground() {
  return <Particles params={ParticleConfig}></Particles>;
}
