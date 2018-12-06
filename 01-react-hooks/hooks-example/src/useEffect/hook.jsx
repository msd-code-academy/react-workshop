import React, {useState, useEffect} from 'react';

export const MyMouse = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const onMouseMove = event => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  const {x, y} = mousePosition;
  return (
    <div>My mouse x position is {x} and y position is {y}</div>
  );
};
