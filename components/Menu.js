import Link from "next/link";
import {
	Button,
	ButtonGroup,
	Card,
	Col,
	Dropdown,
	DropdownButton,
	Nav,
	NavDropdown,
	NavItem,
	NavLink,
} from "react-bootstrap";
import menu from "../lib/menu";

export default function Menu() {
	// console.log(menu);
	return (
		<div>
			<Nav>
				{menu.map((i) => {
					return (
						<Nav.Item key={i.id}>
							{i.menu ? (
								<Dropdown
									as={NavItem}
									id="collasible-nav-dropdown"
									autoClose="outside"
								>
									<Dropdown.Toggle as={NavLink}>{i.title}</Dropdown.Toggle>
									<Dropdown.Menu>
										{i.menu.map((x) => (
											<Dropdown.Item key={x.id}>
												{x.menu ? (
													<DropdownButton
														as={ButtonGroup}
														key="end"
														id="dropdown-button-drop-end"
														drop="end"
														title={i.title}
													>
														{x.menu.map((y) => (
															<Dropdown.Item key={y.id}>
																<Link href={`/${y.slug}`}>
																	<a>{y.title}</a>
																</Link>
															</Dropdown.Item>
														))}
													</DropdownButton>
												) : (
													<Dropdown.Item>
														<Link href={`/${x.slug}`}>
															<a>{x.title}</a>
														</Link>
													</Dropdown.Item>
												)}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							) : (
								<Link href={`/${i.slug}`} passHref>
									<Nav.Link>
										<a>{i.title}</a>
									</Nav.Link>
								</Link>
							)}
						</Nav.Item>
					);
				})}
			</Nav>
		</div>
	);
}
