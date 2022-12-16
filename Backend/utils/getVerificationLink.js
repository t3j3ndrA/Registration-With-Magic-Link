import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const getVerificationLink = (email) => {
	const JWT_SECRETS = process.env.JWT_SECRETS;
	const expiresIn = 3000;
	const token = jwt.sign({ email }, JWT_SECRETS, {
		expiresIn,
	});

	return `${process.env.BASE_URL}/user/verify-user?token=${token}`;
};

export default getVerificationLink;
