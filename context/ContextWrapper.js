import { useState } from "react";
import ServiceContext from "./ServiceContext";

export default function ContextWrapper({ children, services }) {
	// let services = services;
	const [products] = useState(services);

	return (
		<ServiceContext.Provider value={{ products }}>
			{children}
		</ServiceContext.Provider>
	);
}
