import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const getVerificationLink = (firstName, lastName, email) => {
	const JWT_SECRETS = process.env.JWT_SECRETS;
	const expiresIn = 3000;
	const token = jwt.sign({ firstName, lastName, email }, JWT_SECRETS, {
		expiresIn,
	});

	return `${process.env.BASE_URL}/api/v1/user/verify-user?token=${token}`;
};

export default getVerificationLink;
