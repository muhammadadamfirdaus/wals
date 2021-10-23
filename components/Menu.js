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
	return (
		<div>
			<Nav>
				{menu.map((i) => {
					return (
						<Nav.Item key={i.id}>
							{i.menu ? (
								<Dropdown as={NavItem} id="collasible-nav-dropdown">
									<Dropdown.Toggle as={NavLink}>{i.title}</Dropdown.Toggle>
									<Dropdown.Menu>
										{i.menu.map((x) => (
											<Dropdown.Item key={x.id}>
												<Link href={`/${x.slug}`}>
													<a>{x.title}</a>
												</Link>
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							) : (
								<Nav.Link href={`/${i.slug}`}>
									<a>{i.title}</a>
								</Nav.Link>
							)}
						</Nav.Item>
					);
				})}
			</Nav>
		</div>
	);
}
