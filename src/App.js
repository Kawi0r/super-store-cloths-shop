import { Routes, Route } from "react-router-dom";
import Naviagtion from "./routes/navigation/navigation.component";

import SignIn from "./routes/sign-in/sign-in.component";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>I am the shop!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Naviagtion />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
