
function Header(props) {
  return (
    <header className="header">
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

export default Header