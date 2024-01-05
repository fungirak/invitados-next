import logoJs from '../../public/img/logoJs.png';
import logoTs from '../../public/img/logoTs.png';
import logoMongodb from '../../public/img/logoMongodb.svg';
import logoExpress from '../../public/img/logoExpress.svg';
import logoReact from '../../public/img/logoReact.svg';
import logoAngular from '../../public/img/logoAngular.png';
import logoNodejs from '../../public/img/logoNodejs.svg';
import logoMysql from '../../public/img/logoMysql.svg';
import logoCss from '../../public/img/logoCss.png';
import logoBootstrap from '../../public/img/logoBootstrap.svg';
import logoMaterialize from '../../public/img/logoMaterialize.png';
import logoSass from '../../public/img/logoSass.svg';
import logoGit from '../../public/img/logoGit.svg';
import logoUbuntu from '../../public/img/logoUbuntu.svg';
import logoWindows from '../../public/img/logoWindows.png';
import logoVisualStudioCode from '../../public/img/logoVisualStudioCode.png';
import logoGithub from '../../public/img/logoGithub.svg';

import Logoskills from './helpers/Logoskills';
import Banda from './helpers/Banda';


const urlJavascript = "https://developer.mozilla.org/es/docs/Web/JavaScript";
const urlTypescript = "https://www.typescriptlang.org";
const urlMongodb = "https://www.mongodb.com/es";
const urlExpress = "https://expressjs.com/es/";
const urlReactjs = "https://es.reactjs.org/";
const urlAngular = "https://angular.io";
const urlNodejs = "https://nodejs.org/es/";
const urlMysql = "https://www.mysql.com/";
const urlCss = "https://developer.mozilla.org/en-US/docs/Web/CSS";
const urlBootstrap = "https://getbootstrap.com/";
const urlMaterialize = "https://materializecss.com/";
const urlSass = "https://sass-lang.com/";
const urlGit = "https://git-scm.com/";
const urlUbuntu = "https://ubuntu.com/";
const urlWindows = "https://www.microsoft.com/en-us/windows?r=1";
const urlVisualStudioCode = "https://code.visualstudio.com/";
const urlGithub = "https://github.com/";



const DescripcionSkills = () => {
    return (
        <div className="container ">
            <h1 className="text-center fw-normal mt-3 p-2 shadow-lg rounded-pill">Skills</h1>

            <div className="mt-5 mb-5">
                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light  mb-3">LENGUAJES Y TECNOLOGIAS</h5>
                   
                    <Logoskills url={urlJavascript} logo="/img/logoJs.png" nombre={'JavaScript'} border={'border-warning'} />
                    <Logoskills url={urlTypescript} logo="/img/logoTs.png" nombre={'TypeScript'} border={'border-primary'} />
                   

                </div>

                <div className="row  p-3  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light  mb-3">STACK MERN JAVASCRIPT</h5>

                    <Logoskills url={urlMongodb} logo="/img/logoMongoDb.png" nombre={'Mongo DB'}border={'border-success'} />
                    <Logoskills url={urlExpress} logo="/img/logoExpress.png" nombre={'Express'} border={'border-dark'} />
                    <Logoskills url={urlReactjs} logo="/img/logoReact.png" nombre={'React'} border={'border-info'} /> 
                    <Logoskills url={urlNodejs} logo="/img/logoNodejs.png" nombre={'Node'} border={'border-success'} />

                </div>

                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light  mb-3">ANGULAR</h5>

                    <Logoskills url={urlAngular} logo="/img/logoAngular.png" nombre={'Angular'} border={'border-danger'} />

                </div>


                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light">BASE DE DATOS SQL y NO SQL</h5>

                    <Logoskills url={urlMysql} logo="/img/logoMysql.png" nombre={'MySql'} border={'border-primary'} />
                    <Logoskills url={urlMongodb} logo="/img/logoMongodb.png" nombre={'Mongo DB'} border={'border-success'} />

                </div>

                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light  mb-3">CSS</h5>

                    <Logoskills url={urlCss} logo="/img/logoCss.png" nombre={'CSS 3'} border={'border-primary'} />
                    <Logoskills url={urlBootstrap} logo="/img/logoBootstrap.png" nombre={'Bootstrap'} border={'border-gray'} />
                    <Logoskills url={urlMaterialize} logo="/img/logoMaterialize.png" nombre={'Materialize'} border={'border-danger'} />
                    <Logoskills url={urlSass} logo="/img/logoSass.png" nombre={'Sass'} border={'border-danger'} />
                  
                </div>

                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light mb-3">GLOBALES</h5>
                    
                    <Logoskills url={urlGit} logo="/img/logoGit.png" nombre={'GIT'} border={'border-danger'} />
                    <Logoskills url={urlGithub} logo="/img/logoGithub.png" nombre={'Github'} border={'border-dark'} />
                    <Logoskills url={urlUbuntu} logo="/img/logoUbuntu.png" nombre={'Ubuntu Linux'} border={'border-danger ms-1'} />
                    <Logoskills url={urlWindows} logo="/img/logoWIndows.png" nombre={'Windows'} border={'border-info'} />
                    <Logoskills url={urlVisualStudioCode} logo="/img/logoVisualStudioCode.png" nombre={'VSC'} border={'border-primary'} />
                
                </div>
            </div>

            <div className="espacio"></div>
            
            <Banda seccion={'HABILIDADES'} color={'yellow'} />

        </div>
    )
}

export default DescripcionSkills
