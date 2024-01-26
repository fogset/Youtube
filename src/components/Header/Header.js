import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faUser,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
    Container,
    FaBars_Container,
    Wrapper,
    Search,
    MagnifyingGlass_Container,
    Input,
    Button,
} from "./Header.styled";
import { Link } from "react-router-dom";
function Header() {
    return (
        <Container>
            <FaBars_Container>
                <Link to="/">
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </Link>
            </FaBars_Container>
            <Wrapper>
                <Search>
                    <Input type="text" placeholder="Search" />
                    <MagnifyingGlass_Container>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </MagnifyingGlass_Container>
                </Search>
                <Button>
                    <FontAwesomeIcon icon={faUser} />
                    SIGN IN
                </Button>
            </Wrapper>
        </Container>
    );
}

export default Header;
