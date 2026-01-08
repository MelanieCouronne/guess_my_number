let secretNumber;

export const generateSecretNumber = () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  // console.log("👉 Secret number:", secretNumber);
  return secretNumber;
};
