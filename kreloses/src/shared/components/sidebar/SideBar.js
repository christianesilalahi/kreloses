import "./SideBar.css"

export const SideBar = ({ sidebarOpen, body }) => {
    return(
        <div>
            <div className={`sidebar ${sidebarOpen ? 'openSidebar' : ''}`}>
            {/* <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a> */}
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>

        <div style={{ marginLeft: sidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s' }}>
            {/* Your main content goes here */}
            {body}
            <h2>Welcome to the Dashboard</h2>
            <p>Content of the page...</p>
            </div>
        </div>
    );
}