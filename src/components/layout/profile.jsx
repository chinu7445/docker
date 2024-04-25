import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAuth0 } from "@auth0/auth0-react";

function VariantsExample() {
    let { user } = useAuth0();
  return (
    <>
      {
        <DropdownButton
          id={`dropdown-variants-Secondary`}
          variant="Secondary"
          title=<svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        >
          <Dropdown.Item eventKey="1">{user.name}</Dropdown.Item>
          <Dropdown.Item eventKey="2">{user.email}</Dropdown.Item>
        </DropdownButton>
      }
    </>
  );
}

export default VariantsExample;
