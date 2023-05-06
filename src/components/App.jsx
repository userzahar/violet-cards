import { Route, Routes } from "react-router-dom"

export const App = () => {
  return (<>

      <Routes>
          <Route path="/" element={<div>Hello</div>}>
                <Route index element={<Homepage />} />
                <Route path="*" element={<Homepage />} />
                <Route path="/tweets" element={<Tweets />} />
          </Route>
      </Routes>   
</>

  );
};

