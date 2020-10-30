import axios from "axios";

const backURL = "http://localhost:3000";

class userAgentAPI {
	static async get() {
		const response = await axios.get(
			process.env.NODE_ENV === "production"
				? "/api/userAgent"
				: `${backURL}/api/userAgent`,
		);

		return response;
	}
}

export default userAgentAPI;
