
const Footer = () => {
    var today = new Date();
    return (
        <footer>
            <div className = "row justify-content-center mt-3 mb-4">
                <div className = "col-8">
                    <h5>Team Management App - {today.getFullYear()}</h5>
                    <p>- Nithin Reddy Challa</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;