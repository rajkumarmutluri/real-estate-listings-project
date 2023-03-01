
import './App.css';

function App() {
  return (
    <div className="">
      <div className='userdetail'>
        <span>user id:${ }</span>  <span className='username'>username</span>
      </div>
      <aside className='sidepart'>
        <div className='logo'>LOGO</div>
        <i></i><p>property</p>
        <i></i><p>Assistance</p>
        <i></i><p>Recieved Interest</p>
        <i></i><p>Sent Interest</p>
        <i></i><p>property Views</p>
        <i></i><p>Tariff Plan</p>
      </aside>
      <div className='container'>
        <input className='searchbar' type="text" placeholder='search PPD Id' />
        <button itemID='btn'>+ Add property</button>
      </div>
      <div className='table-container'>
        <table className='decorate'>
          <tr>
            <th>PPD ID</th>
            <th>Image</th>
            <th>property</th>
            <th>contact</th>
            <th>area</th>
            <th>views</th>
            <th>status</th>
            <th>Days left</th>
            <th>Action</th>
          </tr>
        </table>
      </div>

    </div>
  );
}

export default App;
