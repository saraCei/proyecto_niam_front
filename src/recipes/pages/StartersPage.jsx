import { BtnAddRecipe, CategoriesFilter, FormModal, Navbar, RecipesGallery } from "../components"
import { Footer } from "../components/Footer"

export const StartersPage = () => {

  return (
    <>

    {/* Barra de navegación */}
    <Navbar/>

    {/* Encabezado */}
    <header className='text-center py-5 colorFondo'>
    <h1>Aperitivos</h1>
    </header>

    {/* Listado de Recetas */}
    <div className='container-fluid row'>
    <div className='col-sm-3'>
        {/* Filtro */}
        <CategoriesFilter/>
    </div>
    <div className='col my-3'>
        <h2 className='subtitulo'>Aperitivos</h2>
        {/* Galería de recetas guardadas */}
        <RecipesGallery category={'aperitivo'}/>
    </div>
    <BtnAddRecipe/>
    <FormModal/>
    </div>

    {/* Pie de Página */}
    <Footer/>
    </>
  )
}
