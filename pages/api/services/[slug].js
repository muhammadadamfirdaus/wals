// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { services } = require("../services.json");

export default function handler(req, res) {
	const jasa = services.filter((s) => s.slug === req.query.slug);
	res.status(200).json(JSON.stringify(jasa));
}
