export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitalizeFully = (str: string) => {
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};
