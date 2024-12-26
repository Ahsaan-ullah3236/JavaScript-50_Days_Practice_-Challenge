const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) return false;

  str = str.split(" ");
  //   console.log(str);

  str = str.map((curElement) =>
    curElement.replace(curElement[0], curElement[0].toUpperCase())
  );
  str = `#${str.join("")}`;
  console.log(str);

};

console.log(generateHash("my name is ahsan khan"));
