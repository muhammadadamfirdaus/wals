import { useState } from "react";
import ServiceContext from "./ServiceContext";

export default function ContextWrapper({ children, services }) {
	// let services = services;
	useState(services);

	return (
		<ServiceContext.Provider value={{ services }}>
			{children}
		</ServiceContext.Provider>
	);
}
