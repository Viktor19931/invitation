import { FC } from "react";

import Header from './components/Header'
import GlobalStyles from './styles/GlobalStyles'

const App: FC = () => (
  <div>
    <GlobalStyles/>
    <Header/>
    <h1>Viktor & Mariana</h1>
  </div>
);

export default App;
