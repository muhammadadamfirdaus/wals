import Link from "next/link";
import {
	Button,
	Card,
	Col,
	Dropdown,
	Nav,
	NavDropdown,
	NavItem,
	NavLink,
} from "react-bootstrap";
import menu from "../lib/menu";

export default function Menu() {
	console.log(menu);
	return (
		<div>
			<Nav>
				{menu.map((i) => {
					console.log(i);
					return (
						<Nav.Item>
							{i.menu ? (
								<Dropdown as={NavItem} id="collasible-nav-dropdown">
									<Dropdown.Toggle as={NavLink}>{i.title}</Dropdown.Toggle>
									<Dropdown.Menu>
										{i.menu.map((x) => (
											<Dropdown.Item>
												<Link href={`/${x.slug}`}>{x.title}</Link>
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							) : (
								<Nav.Link href={`/${i.slug}`}>{i.title}</Nav.Link>
							)}
						</Nav.Item>
					);
				})}
			</Nav>
		</div>
	);
}
