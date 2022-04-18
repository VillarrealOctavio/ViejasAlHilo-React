import BolsofrenteDOH from "../utils/img/bolsos/BolsofrenteDOH.png"
import CamufladoNVB from "../utils/img/bolsos/Camufladonaranjaverdeblanco.jpg"
import CamufladoVFCN from "../utils/img/bolsos/Camufladoverdefluorcelestenegro.jpg"
import CamufladoVMN from "../utils/img/bolsos/Camufladoverdemarronnegro.jpg"
import BigCircles from "../utils/img/bolsos/Circulosgrandes.jpg"
import BigCircles2 from "../utils/img/bolsos/Circulosgrandess.jpg"
import Geometricos from "../utils/img/bolsos/Dibujosgeometricos.jpg"
import Estampado from "../utils/img/bolsos/EstampadoCaro.jpg"
import EtnicoCR from "../utils/img/bolsos/Etnicocyanrojo.jpg"
import EtnicoCR2 from "../utils/img/bolsos/Etnicocyanrojo2.jpg"
import EtnicoFronterasC from "../utils/img/bolsos/Etnicofronterasceleste.jpg"
import EtnicoFronterasM from "../utils/img/bolsos/Etnicofronterasmarron.jpg"
import EtnicoN from "../utils/img/bolsos/Etniconegro.jpg"
import EtnicoPasteles from "../utils/img/bolsos/Etnicopasteles.jpg"
import FloresAcuarela from "../utils/img/bolsos/Floresacuarela.jpg"
import FloresMarinas from "../utils/img/bolsos/Floresmarinas.jpg"
import FloresyHojas from "../utils/img/bolsos/Floresyhojas.jpg"
import FlorSandalia from "../utils/img/bolsos/FlorSandalia.jpg"
import GuardaGA from "../utils/img/bolsos/Guardageometricaazul.jpg"
import HojitasConRayas from "../utils/img/bolsos/Hojitasconrayas.jpg"
import HojitasGrandes from "../utils/img/bolsos/Hojitasgrandes.jpg"
import HojitasVerdes from "../utils/img/bolsos/Hojitasverdes.jpg"
import Homero1 from "../utils/img/bolsos/Homero1.png"
import Homero2 from "../utils/img/bolsos/Homero2.png"
import LisoGN from "../utils/img/bolsos/LisoGrisnaranja.jpg"
import LisoN from "../utils/img/bolsos/LisoNegro.jpg"
import LisoNCE from "../utils/img/bolsos/LisoNegroconcintaestampada.jpg"
import LisoNCE2 from "../utils/img/bolsos/LisoNegroconcintaestampada1.jpg"
import LisoNCER1 from "../utils/img/bolsos/LisoNegroconcintaestampadaarayas1.jpg"
import LisoNCER from "../utils/img/bolsos/LisoNegroconcintaestampadaarayas.jpg"
import LisoNCEC from "../utils/img/bolsos/LisoNegroconcintaestampadacuadros.jpg"
import LisoNV from "../utils/img/bolsos/LisoNegroVerde.jpg"
import MandalaA from "../utils/img/bolsos/Mandalaazul.jpg"
import MandalaFA from "../utils/img/bolsos/Mandalaflorarcoiris.jpg"
import MandalaF from "../utils/img/bolsos/MandalaFucsia.jpg"
import MandalaGeo from "../utils/img/bolsos/Mandalageometrico.jpg"
import MandalaN from "../utils/img/bolsos/Mandalageometrico.jpg"
import RayaHoriAVC from "../utils/img/bolsos/Rayashorizontalazulverdeceleste.jpg"
import RayaHoriGFC from "../utils/img/bolsos/Rayashorizontalgrisfucsiacyan.jpg"
import RayaHoriNNCB from "../utils/img/bolsos/Rayashorizontalnaranjanaranjaclaroblanco.jpg"
import Rombos from "../utils/img/bolsos/Rombos.jpg"
import Sasuke from "../utils/img/bolsos/Sasuke.png"
import Seiga from "../utils/img/bolsos/Seiga.png"


const stockBolsos = [
    {id:11, tipo:"Homero", precio: 1500, img: BolsofrenteDOH, cantidad: 1, clase: "personalizado"},
    {id:12, tipo:"Homero", precio: 1500, img: Homero2, cantidad: 1, clase: "personalizado"},
    {id:13, tipo:"Homero", precio: 1500, img: Homero1, cantidad: 1,clase: "personalizado"},
    {id:14, tipo:"Sasuke", precio: 2000, img: Sasuke, cantidad: 1,clase: "personalizado"},
    {id:15, tipo:"Seiga", precio: 2000, img: Seiga, cantidad: 1,clase: "personalizado"},
    {id:16, tipo:"Camuflado-Naranja-Verde-Blanco", precio: 2000, img: CamufladoNVB, cantidad: 1,clase: "camuflado"},
    {id:17, tipo:"Camuflado-Verde fluor-Celeste-Negro", precio: 2000, img:CamufladoVFCN, cantidad: 1,clase: "camuflado"},
    {id:18, tipo:"Camuflado-Verde-Marrón-Negro", precio: 2000, img: CamufladoVMN, cantidad: 1,clase: "camuflado"},
    {id:19, tipo:"Circulos", precio: 2000, img: BigCircles, cantidad: 1,clase: "estampado"},
    {id:110, tipo:"Circulos", precio: 2000, img: BigCircles2, cantidad: 1,clase: "estampado"},
    {id:111, tipo:"Dibujos geométricos", precio: 2000, img: Geometricos, cantidad: 1,clase: "estampado"},
    {id:112, tipo:"Estampado-Caro", precio: 2000, img: Estampado, cantidad: 1,clase: "estampado"},
    {id:113, tipo:"Étnico-Cyan-Rojo", precio: 2000, img:EtnicoCR2, cantidad: 1,clase: "estampado"},
    {id:114, tipo:"Étnico-Cyan-Rojo", precio: 2000, img:EtnicoCR, cantidad: 1,clase: "estampado"},
    {id:115, tipo:"Étnico-Fronteras-Celeste", precio: 2000, img:EtnicoFronterasC, cantidad: 1,clase: "estampado"},
    {id:116, tipo:"Étnico-Fronteras-Marrón", precio: 2000, img:EtnicoFronterasM, cantidad: 1,clase: "estampado"},
    {id:117, tipo:"Étnico-Negro", precio: 2000, img: EtnicoN, cantidad: 1,clase: "estampado"},
    {id:118, tipo:"Étnico-Pasteles", precio: 2000, img: EtnicoPasteles, cantidad: 1,clase: "estampado"},
    {id:119, tipo:"Flor Sandalia", precio: 2000, img:FlorSandalia, cantidad: 1,clase: "estampado"},
    {id:120, tipo:"Flores Acuarela", precio: 2000, img: FloresAcuarela, cantidad: 1,clase: "estampado"},
    {id:121, tipo:"Flores Marina", precio: 2000, img: FloresMarinas, cantidad: 1,clase: "estampado"},
    {id:122, tipo:"Flores y Hojas", precio: 2000, img:FloresyHojas, cantidad: 1,clase: "estampado"},
    {id:123, tipo:"Guarda geométrica", precio: 2000, img:GuardaGA, cantidad: 1,clase: "estampado"},
    {id:124, tipo:"Hojas con rayas", precio: 2000, img: HojitasConRayas, cantidad: 1,clase: "estampado"},
    {id:125, tipo:"Hojas grandes", precio: 2000, img:HojitasGrandes, cantidad: 1,clase: "estampado"},
    {id:126, tipo:"Hojas verdes", precio: 2000, img:HojitasVerdes, cantidad: 1,clase: "estampado"},
    {id:127, tipo:"Gris-Naranja", precio: 2000, img: LisoGN, cantidad: 1,clase: "liso"},
    {id:128, tipo:"Negro-Verde", precio: 2000, img:LisoNV, cantidad: 1,clase: "liso"},
    {id:129, tipo:"Negro con cinta estampada", precio: 2000, img: LisoNCE2, cantidad: 1,clase: "liso"},
    {id:130, tipo:"Negro con cinta estampada a rayas", precio: 2000, img: LisoNCER1, cantidad: 1,clase: "liso"},
    {id:131, tipo:"Negro con cinta estampada a rayas", precio: 2000, img: LisoNCER, cantidad: 1,clase: "liso"},
    {id:132, tipo:"Negro con cinta estampada a cuadros", precio: 2000, img:LisoNCEC, cantidad: 1,clase: "liso"},
    {id:133, tipo:"Negro con cinta estampada", precio: 2000, img:LisoNCE, cantidad: 1,clase: "liso"},
    {id:134, tipo:"Negro", precio: 2000, img:LisoN, cantidad: 1,clase: "liso"},
    {id:135, tipo:"Mandala azul", precio: 2000, img:MandalaA, cantidad: 1,clase: "estampado"},
    {id:136, tipo:"Mandala-Flor-Arcoiris", precio: 2000, img:MandalaFA, cantidad: 1,clase: "estampado"},
    {id:137, tipo:"Mandala fuscia", precio: 2000, img:MandalaF, cantidad: 1,clase: "estampado"},
    {id:138, tipo:"Mandala geométrica", precio: 2000, img: MandalaGeo, cantidad: 1,clase: "estampado"},
    {id:139, tipo:"Mandala naranja", precio: 2000, img:MandalaN, cantidad: 1,clase: "estampado"},
    {id:140, tipo:"Verde-Azul-Celeste", precio: 2000, img:RayaHoriAVC, cantidad: 1,clase: "rayas"},
    {id:141, tipo:"Gris-Fuscia-Cyan", precio: 2000, img:RayaHoriGFC, cantidad: 1,clase: "rayas"},
    {id:142, tipo:"Naranja-Naranja Claro-Blanco", precio: 2000, img:RayaHoriNNCB, cantidad: 1,clase: "rayas"},
    {id:143, tipo:"Rombos", precio: 2000, img:Rombos, cantidad: 1,clase: "estampado"}
]
export default stockBolsos;
