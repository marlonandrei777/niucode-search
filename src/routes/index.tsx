import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from "../pages/Search";
import { History } from "../pages/History";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Search />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}