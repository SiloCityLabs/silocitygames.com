// Create Import File
import "./index.scss";
import "./assets/css/main.css";
import "photoswipe/dist/photoswipe.css";
import PageScrollTop from "./component/PageScrollTop";

// Home layout
import DesignerPortfolio from "./home/DesignerPortfolio";

import Error404 from "./elements/error404";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<DesignerPortfolio />} />

          {/* Error Route */}
          <Route path={`404`} element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      <PageScrollTop />
    </>
  );
}

export default App;
