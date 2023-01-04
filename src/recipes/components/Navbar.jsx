

export const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-md py-1">
                <a className="navbar-brand">Hola, <span>Usuario</span></a>
                <div>
                    <svg 
                        width="50" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.1112 11.0279H12.8889L11.0226 8.82284C10.6885 8.15677 10.6135 7.3904 10.8121 6.67218C11.0107 5.95396 11.4688 5.33502 12.0976 4.93523C12.7265 4.53545 13.4813 4.38328 14.216 4.50821C14.9506 4.63314 15.6127 5.02627 16.0741 5.61145C16.2523 4.97252 16.6347 4.4095 17.163 4.00839C17.6913 3.60728 18.3364 3.39014 18.9997 3.39014C19.6631 3.39014 20.3082 3.60728 20.8365 4.00839C21.3648 4.4095 21.7472 4.97252 21.9254 5.61145C22.3868 5.02627 23.0489 4.63314 23.7835 4.50821C24.5182 4.38328 25.273 4.53545 25.9019 4.93523C26.5307 5.33502 26.9888 5.95396 27.1874 6.67218C27.386 7.3904 27.311 8.15677 26.9769 8.82284L25.1112 11.0279ZM12.8889 15.6112C12.8889 17.232 13.5328 18.7864 14.6788 19.9324C15.8249 21.0785 17.3793 21.7223 19.0001 21.7223C20.6208 21.7223 22.1752 21.0785 23.3213 19.9324C24.4673 18.7864 25.1112 17.232 25.1112 15.6112V14.0834H12.8889V15.6112ZM12.8889 24.7779L19.0001 27.8334L25.1112 24.7779C26.7319 24.7779 28.2863 25.4217 29.4324 26.5678C30.5784 27.7138 31.2223 29.2682 31.2223 30.889V32.4168C31.2223 32.822 31.0613 33.2106 30.7748 33.4971C30.4883 33.7836 30.0997 33.9445 29.6945 33.9445H8.30561C7.90042 33.9445 7.51182 33.7836 7.22531 33.4971C6.93879 33.2106 6.77783 32.822 6.77783 32.4168V30.889C6.77783 29.2682 7.42168 27.7138 8.56773 26.5678C9.71379 25.4217 11.2682 24.7779 12.8889 24.7779V24.7779ZM22.4376 30.1251C22.4376 30.429 22.5583 30.7204 22.7732 30.9353C22.988 31.1502 23.2795 31.2709 23.5834 31.2709H26.6389C26.9428 31.2709 27.2343 31.1502 27.4492 30.9353C27.6641 30.7204 27.7848 30.429 27.7848 30.1251C27.7848 29.8212 27.6641 29.5298 27.4492 29.3149C27.2343 29.1 26.9428 28.9793 26.6389 28.9793H23.5834C23.2795 28.9793 22.988 29.1 22.7732 29.3149C22.5583 29.5298 22.4376 29.8212 22.4376 30.1251Z" fill="black"/>
                    </svg>
                    <button className="btn btn-outline-dark px-3">Cerrar Sesión</button>
                </div>
            </div>
        </nav>
    </>
  )
}
