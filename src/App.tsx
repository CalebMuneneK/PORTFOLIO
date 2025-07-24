    import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import Index from "./pages/Index";
   import NotFound from "./pages/NotFound";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
   


    function App() {
      return (
        
        <BrowserRouter>
          <Routes>
             <Route index element={<Index />} />
             <Route path="*" element={<NotFound />} />
              
          </Routes>
        </BrowserRouter>
      
        
      );
    }
    export default App;