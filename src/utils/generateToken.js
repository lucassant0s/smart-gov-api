import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const generateToken = async (user, args) => {
  const isPassword = await bcrypt.compare(args.password, user.password);
  if (!isPassword) throw new Error('Incorrect passowrd');

  const token = jsonwebtoken.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return token;
};

export default generateToken;
