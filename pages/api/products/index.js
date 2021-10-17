// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { products } = require("../products.json");

export default function handler(req, res) {
	res.status(200).json(JSON.stringify(products));
}
