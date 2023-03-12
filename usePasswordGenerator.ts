import { useState } from 'react';

const usePasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState('');

  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBERS = '0123456789';
  const SPECIALS = '!@#$%^&*()_+[]{}|?/><,.;":`~';

  let nextIsUpperCase = true;
  let nextIsLoweCase = false;
  let nextIsNumbers = false;
  let nextIsSpecials = false;

  const generatePassword = (): string => {
    let password = '';

    for (let i = 0; i < 8; i++) {
      if (nextIsUpperCase) {
        password += UPPERCASE.charAt(
          Math.floor(Math.random() * UPPERCASE.length)
        );

        nextIsUpperCase = false;
        nextIsLoweCase = true;
        nextIsNumbers = false;
        nextIsSpecials = false;

        continue;
      }
      if (nextIsLoweCase) {
        password += LOWERCASE.charAt(
          Math.floor(Math.random() * LOWERCASE.length)
        );

        nextIsUpperCase = false;
        nextIsLoweCase = false;
        nextIsNumbers = true;
        nextIsSpecials = false;

        continue;
      }
      if (nextIsNumbers) {
        password += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));

        nextIsUpperCase = false;
        nextIsLoweCase = false;
        nextIsNumbers = false;
        nextIsSpecials = true;

        continue;
      }
      if (nextIsSpecials) {
        password += SPECIALS.charAt(
          Math.floor(Math.random() * SPECIALS.length)
        );

        nextIsUpperCase = true;
        nextIsLoweCase = false;
        nextIsNumbers = false;
        nextIsSpecials = false;

        continue;
      }
    }
    return password;
  };

  const generateNewPassword = () => {
    setGeneratedPassword(generatePassword());
  };

  return [generatedPassword, generateNewPassword];
};

export default usePasswordGenerator;
