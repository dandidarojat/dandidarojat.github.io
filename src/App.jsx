// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./routes/Home";
import About from "./routes/About";
import Works from "./routes/Works";
import Contact from "./routes/Contact";
import PageNotFound from "./routes/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
