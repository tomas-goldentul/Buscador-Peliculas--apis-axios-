import { useState, useEffect } from "react";

function ErrorMessage() {
  const colors = ["red", "blue", "green", "orange", "purple"];
  const [color1, setColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((p) => (p + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 style={{ color: colors[color1] }}>=[</h1>
    </>
  );
}

export default ErrorMessage;
