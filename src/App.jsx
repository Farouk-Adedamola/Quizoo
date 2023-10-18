// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Quizoo, SharedLayout, Login, Signup } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="quizoo" element={<Quizoo />} />
          <Route path="sharedlayout" element={<SharedLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <BrowserRouter>
  <Routes>
    <Route index element={<Home />} />
    <Route path="quizoo" element={<Quizoo />} />
  </Routes>
  <Route path="sharedlayout" element={<SharedLayout />}>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/">
      <h2>Welcome to the main page</h2>
    </Route>
  </Route>
</BrowserRouter>; */
}
