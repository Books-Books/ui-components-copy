import React, { Fragment, useState } from 'react'
import { Dropdown } from '../../atoms/Dropdown'
import { Link } from '../../atoms/Link'
import cssNavbar from './NavBar.module.css'

export function NavBar({
  contentOva, //Se pasa el arreglo de objetos [{}]
  hrefInicio = '#' //Se pasa la url del Btn Inicio
}) {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const [dropdownAcc, setDropdownAcc] = useState(false)
  const [dropdownHelp, setDropdownHelp] = useState(false)

  //iconos de las opciones
  const svgMenu = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
    >
      {' '}
      <path fill='none' d='M0 0h24v24H0V0z'></path>{' '}
      <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>{' '}
    </svg>
  )
  const svgInicio = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 24 24'
    >
      <path fill='none' d='M0 0h24v24H0V0z'></path>
      <path d='M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z'></path>
    </svg>
  )
  const svgAccesibility = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
    >
      <path fill='none' d='M0 0h24v24H0V0z'></path>
      <path d='M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
    </svg>
  )
  const svgHelp = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path fill='none' d='M0 0h24v24H0V0z'></path>
      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z'></path>
    </svg>
  )

  //Función para listar las rutas de la ova "props = contentOva"
  const content = [
    {
      name: 'primero',
      url: '#'
    },
    {
      name: 'segundo',
      url: '#'
    },
    {
      name: 'tercero',
      url: '#'
    },
    {
      name: 'cuarto',
      url: '#'
    },
    {
      name: 'quinto',
      url: '#'
    }
  ].map((enlaces, i) => {
    if (i < 9) {
      //If para que los primeros enlaces contengan el 01 - 09
      return (
        <li className={cssNavbar['styleLi']}>
          <a href={enlaces.url} className={cssNavbar['stylelinks']}>
            <span className={cssNavbar['styleNumber']}>{`0${i + 1}.`} </span>
            {enlaces.name}
          </a>
        </li>
      )
    } else {
      return (
        <li className={cssNavbar['styleLi']}>
          <a href={enlaces.url} className={cssNavbar['stylelinks']}>
            <span className={cssNavbar['styleNumber']}>{`${i + 1}.`} </span>
            {enlaces.name}
          </a>
        </li>
      )
    }
  })
  //funcion que cambia los estados de cada menú desplegable
  const handleClickDropdown = (state, setState) => {
    setDropdownMenu(false)
    setDropdownAcc(false)
    setDropdownHelp(false)
    setState(!state)
  }

  return (
    <Fragment>
      <nav className={cssNavbar['menuContainer']} aria-label='menu principal'>
        <ul role='list' className={cssNavbar['ulMenu']}>
          <li
            onClick={() => {
              handleClickDropdown(dropdownMenu, setDropdownMenu) //invocamos y utilizamos la función
            }}
          >
            <Dropdown
              label='Menu'
              svgHide='true'
              icon={svgMenu}
              addClass={cssNavbar['styleBtn']}
              ulClass={cssNavbar['styleUlMenu']}
              isExpanded={dropdownMenu}
              fnMenuExpanded={setDropdownMenu}
            >
              {content}
            </Dropdown>
          </li>
          <li>
            <Link
              label='Inicio'
              icon={svgInicio}
              addClass={cssNavbar['styleLink']}
              href={hrefInicio}
            />
          </li>
          <li
            onClick={() => {
              handleClickDropdown(dropdownAcc, setDropdownAcc) //invocamos y utilizamos la función
            }}
          >
            <Dropdown
              label='Accesibilidad'
              svgHide='true'
              icon={svgAccesibility}
              addClass={cssNavbar['styleBtn']}
              ulClass={cssNavbar['styleUlAcc']}
              isExpanded={dropdownAcc}
              fnMenuExpanded={setDropdownAcc}
            >
              <li className={cssNavbar['styleLi']}>
                <button type='button' className={cssNavbar['styleBtns']}>
                  <span aria-hidden='true' className='Icon_Icon__1siX0 '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='22'
                      viewBox='0 0 24 24'
                      focusable='false'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55A3.999 3.999 0 0021 18h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9a2.5 2.5 0 005 0 2.5 2.5 0 00-5 0z'></path>
                    </svg>
                  </span>
                  <span className={`${cssNavbar.spanText}`}>Asistencia</span>
                  <span
                    aria-hidden='true'
                    className={`${'Icon_Icon__1siX0'} ${cssNavbar.iconRight}`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      focusable='false'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
                    </svg>
                  </span>
                </button>
                <ul
                  className={`${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`}
                >
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='disableHelp'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Deshabilitar ayuda
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='ActivateInterpreter'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Activar intérprete
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='activateAudio'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Activar audio
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
              <li className={cssNavbar['styleLi']}>
                <button type='button' className={cssNavbar['styleBtns']}>
                  <span className='Icon_Icon__1siX0 '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path fill='none' d='M0 0h24v24H0V0z'></path>
                      <path d='M7 16c.55 0 1 .45 1 1 0 1.1-.9 2-2 2-.17 0-.33-.02-.5-.05.31-.55.5-1.21.5-1.95 0-.55.45-1 1-1M18.67 3c-.26 0-.51.1-.71.29L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41l-1.34-1.34c-.2-.2-.45-.29-.7-.29zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z'></path>
                    </svg>
                  </span>
                  <span className={`${cssNavbar.spanText}`}>Contraste</span>
                  <span
                    className={`${'Icon_Icon__1siX0'} ${cssNavbar.iconRight}`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
                    </svg>
                  </span>
                </button>
                <ul
                  className={`${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`}
                >
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>Sin tema</span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Alto contraste
                      </span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Invertir colores
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Amarillo sobre negro
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Blanco sobre rojo
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Verde sobre azul
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Amarillo sobre azul
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Blaco sobre negro
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
              <li className={cssNavbar['styleLi']}>
                <button type='button' className={cssNavbar['styleBtns']}>
                  <span className='Icon_Icon__1siX0 '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z'></path>
                    </svg>
                  </span>
                  <span className={`${cssNavbar.spanText}`}>
                    Tamaño de letra
                  </span>
                  <span
                    className={`${'Icon_Icon__1siX0'} ${cssNavbar.iconRight}`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
                    </svg>
                  </span>
                </button>
                <ul
                  className={`${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`}
                >
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='fontZise1'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Tamaño de letra 1
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='fontZise2'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Tamaño de letra 2
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='fontZise3'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Tamaño de letra 3
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
              <li className={cssNavbar['styleLi']}>
                <button
                  name='nightMode'
                  type='button'
                  className={cssNavbar['styleBtns']}
                >
                  <span className='Icon_Icon__1siX0 '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z'></path>
                    </svg>
                  </span>
                  <span className={`${cssNavbar.spanText}`}>Modo Nocturno</span>
                </button>
              </li>
            </Dropdown>
          </li>
          <li>
            <li
              onClick={() => {
                handleClickDropdown(dropdownHelp, setDropdownHelp) //invocamos y utilizamos la función
              }}
            >
              <Dropdown
                label='Ayuda'
                svgHide='true'
                icon={svgHelp}
                addClass={cssNavbar['styleBtn']}
                ulClass={cssNavbar['styleUlAcc']}
                isExpanded={dropdownHelp}
                fnMenuExpanded={setDropdownHelp}
              >
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <span className='Icon_Icon__1siX0 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path fill='none' d='M0 0h24v24H0V0z'></path>
                        <path d='M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z'></path>
                      </svg>
                    </span>
                    <span className={`${cssNavbar.spanText}`}>
                      Bibliografia
                    </span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <span className='Icon_Icon__1siX0 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path fill='none' d='M0 0h24v24H0V0z'></path>
                        <path d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'></path>
                      </svg>
                    </span>
                    <span className={`${cssNavbar.spanText}`}>Créditos</span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <span className='Icon_Icon__1siX0 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill='none'
                          d='M0 0h24v24H0V0zm0 0h24v24H0V0z'
                        ></path>
                        <path d='M20 7v10H4V7h16m0-2H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z'></path>
                      </svg>
                    </span>
                    <span className={`${cssNavbar.spanText}`}>
                      Atajos de teclado
                    </span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <span className='Icon_Icon__1siX0 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path fill='none' d='M0 0h24v24H0z'></path>
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'></path>
                      </svg>
                    </span>
                    <span className={`${cssNavbar.spanText}`}>Tour</span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <span className='Icon_Icon__1siX0 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path fill='none' d='M0 0h24v24H0V0z'></path>
                        <path d='M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z'></path>
                      </svg>
                    </span>
                    <span className={`${cssNavbar.spanText}`}>
                      Especificaciones técnicas
                    </span>
                  </button>
                </li>
              </Dropdown>
            </li>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}
