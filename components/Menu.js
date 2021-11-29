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
import { useRouter } from "next/router";

export default function Menu() {
  // console.log(menu);
  const router = useRouter();
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
                                <Link
                                  href={`/${router.locale}/${y.slug}`}
                                  passHref
                                  locale={false}
                                >
                                  <a>{y.title}</a>
                                </Link>
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                        ) : (
                          <Dropdown.Item>
                            <Link
                              href={`/${router.locale}/${x.slug}`}
                              passHref
                              locale={false}
                            >
                              <a>{x.title}</a>
                            </Link>
                          </Dropdown.Item>
                        )}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link
                  href={`/${router.locale}/${i.slug}`}
                  passHref
                  locale={false}
                >
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
