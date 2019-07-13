import React from 'react';
import logo from '../imagenes/Listtech-Logo.png';
import styled from 'styled-components'

/* Style InicioSesion */
const Login = styled.div`
    text-align: center;
    box-sizing: border-box;
    display: block;
`;

const HeaderMenu = styled.div`
    background: linear-gradient(to right, #1c3643 0%, #273b47 25%, #1e5372 100%);
    padding: 0 15px;
    position: relative;
    z-index: 2;
`;

const Invitado = styled.div`
    grid-template-columns: minmax(auto, 405px);
    background-color: #fff;
    width: 376px;
    margin: 0 auto;
    -webkit-box-shadow: 0 1px 8px 0 rgba(0,0,0,0.08);
    box-shadow: 0 1px 8px 0 rgba(0,0,0,0.08)
`;

const LoginVista = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #1c3643;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
`;

const LoginSocial = styled.div`
    padding: 24px 32px 0px 32px;
    display: block;
`;

const LoginFacebook = styled.div`
    margin-bottom: 12px;
`;

const LoginGmail = styled.div`
    
`;

const LoginDivider = styled.div`
    width: 82%;
    text-align: center;
    overflow: hidden;
    margin: 1rem auto;
`;

const FormInput = styled.div`

    .input{
    border: 1px solid #c9c9c9;
    padding: 20px 12px;
    font - size: 1rem;
    -webkit - border - radius: 0.25rem;
    border - radius: 0.25rem;
    -webkit - transition: 0.2s border - color;   
    transition: 0.2s border - color;
    background - color: #fff;
    }    
`;

const ButtonIniciar = styled.div`
    background: -webkit - linear - gradient(right, #95ca3e 0 %, #95ca3e 50 %, #85c638 100 %);  
    -webkit-box-shadow: 0 1px 1px 0 #58902d;
    box-shadow: 0 1px 1px 0 #58902d;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    padding: 8px 0.8em 6px 0.8em;
    transition: 0.2s;
    vertical-align: middle;
`;


const FooterRegistro = styled.div`
    
`;


const InicioSesion = () => {
    <Login>
        <header id="header">
            <div class="Header-container u-wrapper u-clearfix">
                <HeaderMenu>
                    <a href="/" title="Platzi.com" class="Header-logo">
                        <img src={logo}                            
                            alt="Listtech.com.co"
                            width="90"
                            height="90"/>
                    </a>
                </HeaderMenu>
            </div>
        </header>
        <LoginVista>
            <Invitado
                data-reactroot=""
                data-reactid="1"
                data-react-checksum="15">
                <div class="Loginv2-container"
                    data-reactid="2">
                    <LoginSocial
                        data-reactid="3">
                        <LoginFacebook
                            data-reactid="4">
                            <a href="/login/facebook/"
                                class="btn-fcbk btn--big btn--responsive"
                                data-reactid="5">
                                <span class="icon--line icon-fcbk"
                                    data-reactid="6"></span>
                                <span data-reactid="7"
                                >Inicia sesi�n con Facebook</span>
                            </a>
                        </LoginFacebook>
                        <LoginGmail
                            data-reactid="8">
                            <a href="/login/gmail/"
                                class="btn-twt btn--big btn--responsive "
                                data-reactid="9">
                                <span class="icon--line icon-twt" data-reactid="10">
                                </span>
                                <span data-reactid="11"
                                >Inicia sesi�n con Gmail</span>
                            </a>
                        </LoginGmail>
                    </LoginSocial>
                    <LoginDivider data-reactid="12">
                        <span class="LoginDivider-text" data-reactid="13">
                            <span data-reactid="14"
                            >o</span>
                        </span>
                    </LoginDivider>
                    <div class="LoginWithEmail"
                        data-reactid="15">
                        <form action="/login/?next="
                            method="post" data-reactid="16">
                            <input type="hidden"
                                name="csrfmiddlewaretoken"
                                value=""
                                data-reactid="17" />
                            <FormInput
                                data-reactid="18">
                                <input type="email"
                                    name="email" required=""
                                    autocomplete="off"
                                    placeholder="Tu email"
                                    class="FormInput-field"
                                    value=""
                                    data-reactid="19" />
                                <label class="FormInput-label" data-reactid="20">
                                    <span data-reactid="21"
                                    >Tu email</span>
                                </label>
                                <p class="FormInput-error" data-reactid="22">
                                </p>
                            </FormInput>
                            <FormInput
                                data-reactid="23">
                                <input type="password" name="password"
                                    required="" autocomplete="off"
                                    placeholder="Tu contrase�a" class="FormInput-field"
                                    value="" data-reactid="24" />
                                <label class="FormInput-label"
                                    data-reactid="25">
                                    <span data-reactid="26"
                                    >Tu contrase�a</span>
                                </label><p class="FormInput-error" data-reactid="27">
                                </p>
                            </FormInput>
                            <ButtonIniciar data-reactid="28">
                                <span data-reactid="29"
                                >Inicia sesi�n</span>
                            </ButtonIniciar>
                            <div class="LoginWithEmail-lostpassword" data-reactid="30">
                                <a href="/password/reset/" data-reactid="31">
                                    <span data-reactid="32">
                                        �Olvidaste tu contrase�a?
                                                            </span>
                                </a>
                            </div>
                        </form>
                    </div>
                    <FooterRegistro data-reactid="33">
                        <div class="AccountFooter-create" data-reactid="34">
                            <span data-reactid="35"
                            >�A�n no tienes cuenta en Platzi?</span>
                        </div>
                        <div class="AccountFooter-link" data-reactid="36">
                            <a href="/signup/"
                                class="AccountFooter-btn"
                                data-reactid="37">
                                <span data-reactid="38"
                                >Reg�strate
                                    </span>
                            </a>
                        </div>
                    </FooterRegistro>
                </div>
            </Invitado>                
        </LoginVista>        
    </Login>
};


export default InicioSesion;