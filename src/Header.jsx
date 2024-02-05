const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className = "container">
            <div className = "row justify-content-center mt-3 mb-4">
                <div className = "col-8">
                    <h1>Team Management</h1>
                    <h5>{selectedTeam} has {teamMemberCount} members</h5>
                </div>
            </div>
        </header>
    );
}

export default Header