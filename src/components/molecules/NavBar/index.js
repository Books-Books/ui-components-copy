import React, { Fragment, useState } from 'react'
import { Button, ContrastFilters } from '../../atoms'
import { DarkThemeToggle } from '../../atoms/DarkThemeToggle'
import { Dropdown } from '../../atoms/Dropdown'
import { Icon } from '../../atoms/icon'
import { Link } from '../../atoms/Link'
import cssNavbar from './NavBar.module.css'

/**
 * Usuario: bb-frontend-6
 * Descripción: Menú que cuaneta con 4 acciones diferentes, la primera "Menú" lista todo el contenido de la ova en licks, "Inicio" redirige a la pagina principalm, "Accesibilidad" trae todas las configuraciones para la aceesibilidad del usuario, "Ayuda" despliega modales informativos.
 * param { contentOva, hrefInicio }
 * - contentOva: recibe el contenido "URL" de la Ova para desplegar en el menú.
 * - hrefInicio: recibe la ruta del Inicio de la Ova.
 **/
export function NavBar({
  contentOva, //Se pasa el arreglo de objetos [{}]
  hrefInicio = '#' //Se pasa la url del Btn Inicio
}) {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const [dropdownAcc, setDropdownAcc] = useState(false)
  const [dropdownHelp, setDropdownHelp] = useState(false)
  const [activeTheme, setActiveTheme] = useState('')
  const [menuResponsive, setMenuResponsive] = useState(false)

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

  // Manejo de cambio de clases de acuerdo al tema

  const changeTheme = function (type) {
    const html = document.querySelector('html')

    switch (type) {
      case '':
        html.className = ''
        break
      case 'highContrast':
        html.className = 'high-contrast'
        break
      case 'grayScale':
        html.className = 'grayscale'
        break
      case 'invertColors':
        html.className = 'invert-colors'
        break
      case 'yellowOverBlack':
        html.className = 'yellow-on-black'
        break
      case 'whiteOverRed':
        html.className = 'red-on-white'
        break
      case 'greenOverBlue':
        html.className = 'green-on-blue'
        break
      case 'yellowOverBlue':
        html.className = 'yellow-on-blue'
        break
      case 'whiteOverBlack':
        html.className = 'white-on-black'
        break
      default:
        html.className = ''
        break
    }
    setActiveTheme(type)
  }

  return (
    <Fragment>
      <nav className={cssNavbar['menuContainer']} aria-label='menu principal'>
        <Button
          icon='menu'
          className={`${cssNavbar.menuResponsive}`}
          onClick={() => {
            !menuResponsive ? setMenuResponsive(true) : setMenuResponsive(false)
          }}
        />
        <ul
          role='list'
          className={`${cssNavbar['ulMenu']} ${
            menuResponsive === true && cssNavbar.ulMenuAct
          }`}
        >
          <li
            onClick={() => {
              handleClickDropdown(dropdownMenu, setDropdownMenu) //invocamos y utilizamos la función
            }}
          >
            <Dropdown
              label='Menu'
              svgHide='true'
              icon='menu'
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
              icon='home'
              addClass={cssNavbar['styleLink']}
              href={hrefInicio}
            ></Link>
          </li>
          <li
            onClick={() => {
              handleClickDropdown(dropdownAcc, setDropdownAcc) //invocamos y utilizamos la función
            }}
          >
            <Dropdown
              label='Accesibilidad'
              svgHide='true'
              icon='accessibility_new'
              addClass={cssNavbar['styleBtn']}
              ulClass={cssNavbar['styleUlAcc']}
              isExpanded={dropdownAcc}
              fnMenuExpanded={setDropdownAcc}
            >
              <li className={cssNavbar['styleLi']}>
                <button type='button' className={cssNavbar['styleBtns']}>
                  <Icon nameIcon='hearing' />
                  <span className={`${cssNavbar.spanText}`}>Asistencia</span>
                  <Icon nameIcon='chevron_right' />
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
                  <Icon nameIcon='brush' />
                  <span className={`${cssNavbar.spanText}`}>Contraste</span>
                  <Icon nameIcon='chevron_right' />
                </button>
                <ul
                  className={`${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`}
                >
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      type='button'
                      className={cssNavbar['styleBtns']}
                      aria-pressed={activeTheme == '' ? true : false}
                      onClick={() => {
                        changeTheme('')
                      }}
                    >
                      <span className={`${cssNavbar.spanText}`}>Sin tema</span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      type='button'
                      className={cssNavbar['styleBtns']}
                      onClick={() => {
                        changeTheme('grayScale')
                      }}
                      aria-pressed={activeTheme == 'grayScale' ? true : false}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Escala de grises
                      </span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      type='button'
                      className={cssNavbar['styleBtns']}
                      aria-pressed={
                        activeTheme == 'highContrast' ? true : false
                      }
                      onClick={() => {
                        changeTheme('highContrast')
                      }}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Alto contraste
                      </span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      type='button'
                      className={cssNavbar['styleBtns']}
                      aria-pressed={
                        activeTheme == 'invertColors' ? true : false
                      }
                      onClick={() => {
                        changeTheme('invertColors')
                      }}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Invertir colores
                      </span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      type='button'
                      className={cssNavbar['styleBtns']}
                      aria-pressed={
                        activeTheme == 'yellowOverBlack' ? true : false
                      }
                      onClick={() => {
                        changeTheme('yellowOverBlack')
                      }}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Amarillo sobre negro
                      </span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      type='button'
                      className={cssNavbar['styleBtns']}
                      aria-pressed={
                        activeTheme == 'whiteOverRed' ? true : false
                      }
                      onClick={() => {
                        changeTheme('whiteOverRed')
                      }}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Blanco sobre rojo
                      </span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      type='button'
                      className={cssNavbar['styleBtns']}
                      aria-pressed={
                        activeTheme == 'greenOverBlue' ? true : false
                      }
                      onClick={() => {
                        changeTheme('greenOverBlue')
                      }}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Verde sobre azul
                      </span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      type='button'
                      className={cssNavbar['styleBtns']}
                      aria-pressed={
                        activeTheme == 'yellowOverBlue' ? true : false
                      }
                      onClick={() => {
                        changeTheme('yellowOverBlue')
                      }}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Amarillo sobre azul
                      </span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      type='button'
                      className={cssNavbar['styleBtns']}
                      aria-pressed={
                        activeTheme == 'whiteOverBlack' ? true : false
                      }
                      onClick={() => {
                        changeTheme('whiteOverBlack')
                      }}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Blanco sobre negro
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
              <li className={cssNavbar['styleLi']}>
                <button type='button' className={cssNavbar['styleBtns']}>
                  <Icon nameIcon='format_size' />
                  <span className={`${cssNavbar.spanText}`}>
                    Tamaño de letra
                  </span>
                  <Icon nameIcon='chevron_right' />
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
                <DarkThemeToggle addClass={cssNavbar['styleBtns']} />
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
                icon='help'
                addClass={cssNavbar['styleBtn']}
                ulClass={cssNavbar['styleUlHelp']}
                isExpanded={dropdownHelp}
                fnMenuExpanded={setDropdownHelp}
              >
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='description' />
                    <span className={`${cssNavbar.spanText}`}>
                      Bibliografia
                    </span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='credit_card' />
                    <span className={`${cssNavbar.spanText}`}>Créditos</span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='keyboard' />
                    <span className={`${cssNavbar.spanText}`}>
                      Atajos de teclado
                    </span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='info' />
                    <span className={`${cssNavbar.spanText}`}>Tour</span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='settings' />
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
      <ContrastFilters />
    </Fragment>
  )
}
