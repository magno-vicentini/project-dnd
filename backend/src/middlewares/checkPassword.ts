import md5 from 'md5';

const checkPassword = (password: string, hash: string): boolean => {
  const encrypted = md5(password);

  return encrypted === hash;
};

export default checkPassword;
