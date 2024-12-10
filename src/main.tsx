import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GridLights from './grid-lights.jsx';

/* Build a 3x3 grid of light cells (omitting the center cell) where you can click on the cells to activate them, 
turning them green. When all the cells have been activated, they will be deactivated one by one in the reverse order they were activated with a 300ms interval in between. */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GridLights />
  </StrictMode>,
)
