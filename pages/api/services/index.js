// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { services } = require("../services.json");

export default function handler(req, res) {
	res.status(200).json(JSON.stringify(services));
}
