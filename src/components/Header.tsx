type Props = {
    title: string
}
const Header = ({title} : Props) => {
    
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title : 'ToDo list'
}

export default Header
