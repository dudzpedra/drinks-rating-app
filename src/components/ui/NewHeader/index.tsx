import { Container, Logo, NavBar, Title } from "./styles";
import Switch from "react-switch";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/cocktail.png";
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface Props {
    toggleTheme(): void
}

const NewHeader: React.FC<Props> = ({ toggleTheme }) => {
  const handleSwitch = () => {
    toggleTheme()
  }

  const {colors, title} = useContext(ThemeContext)
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="" />
      </Link>
      <Title>some title</Title>
      <NavBar>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/new">Submit</NavLink>
      </NavBar>
      <Switch
        checked={title === 'light'}
        onChange={handleSwitch}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={colors.secundary}
        offColor={shade(0.2, colors.primary)}
        height={20}
        handleDiameter={30}
        width={50}
      />
    </Container>
  );
};

export default NewHeader;
