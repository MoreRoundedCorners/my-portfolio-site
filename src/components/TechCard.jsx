import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card, Row, Text } from "@nextui-org/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { motion, useAnimation } from "framer-motion";

function TechCard({ tech }) {
  const { ref: ref2, inView: visibleEle2 } = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (visibleEle2) {
      controls.start({
        y: 0,
        rotate: 360,
        transition: { duration: 1 },
      });
    } else {
      controls.start({ y: 100 }); // Initial slide down position
    }
  }, [visibleEle2, controls]);

  return (
    <motion.div
      animate={controls}
      style={{
        display: "inline-block",
        backgroundColor: "black",
        borderRadius: "10px",
      }}
      ref={ref2}
    >
      <Card isHoverable isPressable className="card" key={tech.id}>
        <Card.Body>
          <Card.Image src={tech.logo} />
        </Card.Body>
        <Card.Footer>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text
              css={{
                color: "$accents8",
                fontWeight: "$semibold",
                fontSize: "$md",
                textAlign: "center",
                mx: "auto",
                fontSize: "1.2rem",
              }}
            >
              {/* <hr className="w-40"></hr> */}
              {tech.techName}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </motion.div>
  );
}

export default TechCard;
