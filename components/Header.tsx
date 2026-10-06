'use client';
import Link from 'next/link';
import {Brand} from './Brand';
import { useState } from 'react';
export function Header(){const [open,setOpen]=useState(false);return <header className="header"><div className="container nav"><Brand/><button className="menu" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Fechar':'Menu'} <span aria-hidden="true">{open?'×':'☰'}</span></button><nav id="navigation" className={open?'links open':'links'} aria-label="Navegação principal" onClick={()=>setOpen(false)}><Link href="/#aplicativo">O aplicativo</Link><Link href="/#jornadas">Jornadas</Link><Link href="/termos-de-uso/">Termos de Uso</Link><Link href="/politica-de-privacidade/">Política de Privacidade</Link></nav></div></header>}
