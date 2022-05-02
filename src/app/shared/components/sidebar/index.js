import './style.css'
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom'
import { routes } from '../../routes'

const CustomLink = ({children, to, ...props}) =>{
  const resolved = useResolvedPath(to)
  const match = useMatch({path: resolved.pathname, end: true})

  return (
    <div className={match ? 'link--active':'link'}>
      <Link
        to={to}>
          <div className='link--name'>{children}</div>
      </Link>
      {/* {match && ' (active)'} */}
    </div>
  )

}

const Sidebar = () => {

  return (
    <div className='sidebar'>
      <h1>Wakanda</h1>
      <div className='sidebar--links'>
        {routes.map((item, index)=>(
          <CustomLink key={index} to={item.path}>{item.name}</CustomLink>
        ))}

      </div>

      <Outlet />
    </div>
  )
}

export default Sidebar
