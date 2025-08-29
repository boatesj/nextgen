import { createRoot } from 'react-dom/client';
import Header from './components/header';
import './styles/styles.css'





const App = () => (
    <div>
        <Header />
    </div>
)

createRoot(document.getElementById("root")).render(<App />)
