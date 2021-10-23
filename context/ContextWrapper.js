import { useState } from "react";
import ServiceContext from "./ServiceContext";

export default function ContextWrapper({ children, services, products }) {
	// let services = services;
	useState(services, products);

	return (
		<ServiceContext.Provider value={{ services, products }}>
			{children}
		</ServiceContext.Provider>
	);
}
