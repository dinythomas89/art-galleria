import { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle, BodyContainer, MainContainer } from "./styles/global";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const Artist = lazy(() => import("./pages/Artist"));
const Favourites = lazy(() => import("./pages/Favourites"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BodyContainer>
        <Header />
        <MainContainer>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:name" element={<Artist />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainContainer>
        <Footer />
      </BodyContainer>
    </Fragment>
  );
};

export default App;
