import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card, Row, Text } from "@nextui-org/react";
import { techArr } from "../utils/techArr";
import TechCard from "./TechCard";

export default function Technologies() {
  return (
    <div className="flex flex-wrap justify-center">
      {techArr.map((tech) => (
        <TechCard tech={tech} key={tech.id} />
      ))}
    </div>
  );
}
