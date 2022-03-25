import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

const GlobalStyles = createGlobalStyle`
    a {
        text-decoration: none;
    }
    li {
        list-style-type: none;
    }
    input {
       
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
            -webkit-appearance:none;
        }
        input.hide-clear[type=search]::-ms-clear,
        input.hide-clear[type=search]::-ms-reveal {
            display: none;
            width: 0;
            height: 0; 
        }
        :focus {
            outline-style: none;
            outline: none;
        }
    }
`

export default GlobalStyles
