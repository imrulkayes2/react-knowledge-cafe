import profile from '../../../knowledge-cafe/images/profile.png'
const Header = () => {
    return (
        <header className='flex text-center justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold'>React-Knowledge-Cafe</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;