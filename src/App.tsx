import { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle, BodyContainer, MainContainer } from "./styles/global";
import Header from "./components/Header";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const ArtistPaintings = lazy(() => import("./pages/ArtistPaintings"));
const Favourites = lazy(() => import("./pages/Favourites"));

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
              <Route path="/:name" element={<ArtistPaintings />} />
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
