import logo from './shopingcart.svg';
import './App.css';
import Categories from './Categories';

function App() {
    return (
        <div className="App">
            <div className="Page">
                <header className="Page-header">
                    <div className="Shop-name">QPICK</div>
                </header>
                <div className="Catalog">
                    <Categories></Categories>
                </div>
                <footer className="Page-footer">

                </footer>
            </div>
        </div>
    );
}

export default App;
