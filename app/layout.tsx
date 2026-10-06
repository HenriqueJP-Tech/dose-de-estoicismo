import type { Metadata } from 'next';
import './globals.css';
import {Header} from '../components/Header';
import {Footer} from '../components/Shared';
export const metadata:Metadata={title:{default:'Dose de Estoicismo: Inspire-se — Sua pausa diária',template:'%s | Dose de Estoicismo: Inspire-se'},description:'Uma ideia, uma reflexão e uma pequena ação. Conheça o aplicativo aplicativo Dose de Estoicismo: Inspire-se: jornadas, diário e favoritos para Android e iOS.',robots:{index:true,follow:true},openGraph:{title:'Dose de Estoicismo: Inspire-se — Sua pausa diária',description:'Reserve dois minutos para você.',locale:'pt_BR',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><a className="skip" href="#conteudo">Pular para o conteúdo</a><Header/>{children}<Footer/></body></html>}
