import ImgLogo from "../../assets/icon.svg"
import {LogoStyle} from "./styles"

export function Logo() {
  return (
    <LogoStyle>
      <img src={ImgLogo} alt="Finances App" />
      <h2>Finances App</h2>
    </LogoStyle>
  )
}
