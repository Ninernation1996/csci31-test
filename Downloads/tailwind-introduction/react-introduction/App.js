
function App() {
    return (
      <div>
        
        <Navbar />
        <div className="p-12">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
