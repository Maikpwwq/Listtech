import React, { Component } from 'react'

/* Yale McKinney https://accesshardware.com/manufacturers-a-d/ */

import AdamsRite from '../../imagenes/ecommerce-marcas/AdamsRite.png'
import AlarmLock from '../../imagenes/ecommerce-marcas/AlarmLock.png'
import Arrow from '../../imagenes/ecommerce-marcas/Arrow.png'
import Best from '../../imagenes/ecommerce-marcas/Best.png'
import CorbinRusswin from '../../imagenes/ecommerce-marcas/CorbinRusswin.png'
import Detex from '../../imagenes/ecommerce-marcas/Detex.png'
import DonJo from '../../imagenes/ecommerce-marcas/Don-Jo.png'
import Dormakaba from '../../imagenes/ecommerce-marcas/Dormakaba.png'
import Falcon from '../../imagenes/ecommerce-marcas/Falcon.png'
import FolgerAdam from '../../imagenes/ecommerce-marcas/Folger-Adam.png'
import GlynnJohnson from '../../imagenes/ecommerce-marcas/Glynn-Johnson.png'
import Hes from '../../imagenes/ecommerce-marcas/Hes.png'
import HPCKekab from '../../imagenes/ecommerce-marcas/HPC-Kekab.png'
import InternationalElectronicsInc from '../../imagenes/ecommerce-marcas/International-Electronics-Inc.png'
import Ives from '../../imagenes/ecommerce-marcas/Ives.png'
import KeySure from '../../imagenes/ecommerce-marcas/KeySure.png'
import LCN from '../../imagenes/ecommerce-marcas/LCN.png'
import Linear from '../../imagenes/ecommerce-marcas/Linear.png'
import Markar from '../../imagenes/ecommerce-marcas/Markar.png'
import Medeco from '../../imagenes/ecommerce-marcas/Medeco.png'
import Norton from '../../imagenes/ecommerce-marcas/Norton.png'
import Pemko from '../../imagenes/ecommerce-marcas/Pemko.png'
import PhiPrecision from '../../imagenes/ecommerce-marcas/PhiPrecision.png'
import Rci from '../../imagenes/ecommerce-marcas/Rci.png'
import Rixson from '../../imagenes/ecommerce-marcas/Rixson.png'
import RockWood from '../../imagenes/ecommerce-marcas/RockWood.png'
import Roton from '../../imagenes/ecommerce-marcas/Roton.png'
import Sargent from '../../imagenes/ecommerce-marcas/Sargent.png'
import Schlage from '../../imagenes/ecommerce-marcas/Schlage.png'
import Securitron from '../../imagenes/ecommerce-marcas/Securitron.png'
import Soss from '../../imagenes/ecommerce-marcas/Soss.png'
import VonDuprin from '../../imagenes/ecommerce-marcas/VonDuprin.png'

import styled from 'styled-components'

const MarcasStyle = styled.div`
    background: #1f4037; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to top,
        #99f2c8,
        #1f4037
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: liear-gradient(
        to top,
        #99f2c8,
        #1f4037
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-color: white;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
`

const MarcasContenedor = styled.div`
    align: center;
`

const MarcasHeader = styled.header``

const Marcasgrupo = styled.div`
    text-align: center;
    height: 110px; /* Full height */
    position: sticky; /* Make it stick, even on scroll */
    overflow: auto;
`

const MarcasLista = styled.ul`
    display: block;
    display: flex;
    flex-direction: row;
`
const MarcasItem = styled.li`
    list-style: none;
`

class Marcas extends Component {
    constructor() {
        super()

        this.state = {
            title: 'Marcas',
        }
    }

    render() {
        return (
            <MarcasStyle>
                <MarcasContenedor>
                    <MarcasHeader>
                        <span className="text-heading-white">
                            {' '}
                            Marcas Aliadas y distribucio&#769;n{' '}
                        </span>
                        <p className="text-body-main-white m-0">
                            Atendemos Marcas con altos esta&#769;ndares de
                            calidad{' '}
                        </p>
                    </MarcasHeader>
                    <Marcasgrupo>
                        <MarcasLista>
                            <MarcasItem>
                                <a
                                    href="https://www.adamsrite.com/en/site/adamsritecom/"
                                    title="AdamsRite"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={AdamsRite}
                                        alt="AdamsRite"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.alarmlock.com/"
                                    title="AlarmLock"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={AlarmLock}
                                        alt="AlarmLock"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.arrowecs.co.uk/solutions/security"
                                    title="Arrow"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Arrow}
                                        alt="Arrow"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.bestsecurityproducts.com/"
                                    title="Best"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Best}
                                        alt="Best"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.corbinrusswin.com/en/site/corbin-russwin/"
                                    title="CorbinRusswin"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={CorbinRusswin}
                                        alt="CorbinRusswin"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="http://www.detex.com/"
                                    title="Detex"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Detex}
                                        alt="Detex"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.don-jo.com/"
                                    title="DonJo"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={DonJo}
                                        alt="DonJo"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.dormakaba.com/en"
                                    title="Dormakaba"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Dormakaba}
                                        alt="Dormakaba"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://us.allegion.com/en/home/products/brands/falcon.html"
                                    title="Falcon"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Falcon}
                                        alt="Falcon"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.assaabloyesh.com/en/local/assaabloyeshcom/products/electric-strikes/folger-adam-electric-strikes/"
                                    title="FolgerAdam"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={FolgerAdam}
                                        alt="FolgerAdam"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://us.allegion.com/en/home/products/brands/glynn-johnson.html"
                                    title="GlynnJohnson"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={GlynnJohnson}
                                        alt="GlynnJohnson"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.assaabloyesh.com/en/local/assaabloyeshcom/"
                                    title="Hes"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Hes}
                                        alt="Hes"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="http://www.hpcworld.com/main.htm"
                                    title="HPCKekab"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={HPCKekab}
                                        alt="hudsonlock"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.nortekcontrol.com/"
                                    title="InternationalElectronicsInc"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={InternationalElectronicsInc}
                                        alt="InternationalElectronicsInc"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://us.allegion.com/en/home/products/brands/ives.html"
                                    title="Ives"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Ives}
                                        alt="Ives"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.keysure.net/"
                                    title="KeySure"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={KeySure}
                                        alt="KeySure"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://us.allegion.com/en/home/products/brands/lcn.html"
                                    title="LCN"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={LCN}
                                        alt="LCN"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://linear-solutions.com/"
                                    title="Linear"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Linear}
                                        alt="Linear"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.assaabloydooraccessories.us/en/local/assaabloydooraccessoriesus/"
                                    title="Markar"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Markar}
                                        alt="Markar"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.medeco.com/en/site/medeco/products/"
                                    title="Medeco"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Medeco}
                                        alt="Medeco"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.nortondoorcontrols.com/en/site/norton/"
                                    title="Norton"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Norton}
                                        alt="Norton"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.assaabloydooraccessories.us/en/local/assaabloydooraccessoriesus/products/"
                                    title="Pemko"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Pemko}
                                        alt="Pemko"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.nortondoorcontrols.com/en/site/norton/"
                                    title="Norton"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Norton}
                                        alt="Norton"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="http://www.precisionhardware.com/"
                                    title="PhiPrecision"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={PhiPrecision}
                                        alt="PhiPrecision"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.dormakaba.com/us-en/solutions/products/electronic-access---data/access-control-management-software"
                                    title="Rci"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Rci}
                                        alt="Rci"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.rixson.com/en/site/rixson/"
                                    title="Rixson"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Rixson}
                                        alt="Rixson"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.assaabloydooraccessories.us/en/local/assaabloydooraccessoriesus/"
                                    title="RockWood"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={RockWood}
                                        alt="RockWood"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="http://www.hagerhinge.com/"
                                    title="Roton"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Roton}
                                        alt="Roton"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.sargentlock.com/en/site/sargentlockcom/"
                                    title="Sargent"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Sargent}
                                        alt="Sargent"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://us.allegion.com/en/home/products/brands/schlage.html"
                                    title="Schlage"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Schlage}
                                        alt="Schlage"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.assaabloyesh.com/en/local/assaabloyeshcom/"
                                    title="Securitron"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Securitron}
                                        alt="Securitron"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://www.soss.com/"
                                    title="Soss"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={Soss}
                                        alt="Soss"
                                    />
                                </a>
                            </MarcasItem>

                            <MarcasItem>
                                <a
                                    href="https://us.allegion.com/en/home/products/brands/von-duprin.html"
                                    title="VonDuprin"
                                    className="Marcas-icono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <img
                                        style={{ height: '74px' }}
                                        src={VonDuprin}
                                        alt="VonDuprin"
                                    />
                                </a>
                            </MarcasItem>
                        </MarcasLista>
                    </Marcasgrupo>
                </MarcasContenedor>
            </MarcasStyle>
        )
    }
}

export default Marcas
