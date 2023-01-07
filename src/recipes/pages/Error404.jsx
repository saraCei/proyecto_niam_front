import { useNavigate } from "react-router-dom"


export const Error404 = () => {

    const navigate=useNavigate()

    // Volver a la página de inicio
    const backHome = () =>{
        navigate('./')
    }

  return (
    <>
    {/* Página de inicio "recetas" */}
    <header className='text-center py-5 colorFondo'>
      <h1>Error 404</h1>
    </header>

    <section>
        <div className='container-fluid text-center p-5'>
            <h2>Página no encontrada</h2>
            <p>Lo sentimos, no encontramos la página que buscas.</p>
            <div className="fondo404"></div>
            <button 
                className="btn btn-dark"
                onClick={backHome}>
                Volver a la página de inicio
            </button>
        </div>
    </section>

    {/* Pie de Página */}
    <footer className='text-center py-3 fixed-bottom colorFondo'>
        <i className="fa-regular fa-copyright"></i>
        <span>&nbsp; 2023 | Ñam Ñam</span>
    </footer>
    </>
  )
}
