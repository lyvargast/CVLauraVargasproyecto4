import  {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Hind-Light.woff'

const GlobalStyles = createGlobalStyle`
.cajagrande{
    background-color: #000000;
}

/Fuentes/
@font-face{
    font-family:'Hind';
    src: local ('Hind'), url (${PrimaryFont}) Format('woff');
}
`;

export default  GlobalStyles;