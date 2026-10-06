# Dose de Estoicismo: Inspire-se — site em Next.js

Landing page responsiva, CSS puro, App Router, fontes e capturas reais do aplicativo incluídas localmente. Next.js 16.4.0. Exportação estática para hospedagem sem servidor Node.

## Executar

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Abra http://localhost:3000. Para produção: `npm run build`. Publique a pasta `out` em um host estático com HTTPS (rotas com diretórios/index.html); alternativamente hospede o projeto Next na Vercel. `npm start` não atende exportação estática; para conferir `out`, use um servidor estático.

## Configuração obrigatória antes de enviar às lojas

1. Preencha `NEXT_PUBLIC_LEGAL_NAME` com a pessoa/empresa responsável, consistente com o cadastro das lojas, e `NEXT_PUBLIC_SUPPORT_EMAIL` com um e-mail real monitorado. Textos indicam explicitamente a pendência enquanto não configurado.
2. Configure as quatro variáveis Firebase com o MESMO projeto do aplicativo para habilitar exclusão de conta no site. São chaves públicas do SDK, jamais Admin SDK ou chaves secretas. Habilite Email/Password e autorize seu domínio no Firebase Authentication conforme necessário.
3. Informe `NEXT_PUBLIC_SITE_URL` com a URL pública definitiva e faça novo build. Variáveis NEXT_PUBLIC são incorporadas no build.
4. Garanta acesso público, HTTPS e sem login às páginas legais. A prévia privada do Sites não serve para fornecer às lojas.
5. No aplicativo use `EXPO_PUBLIC_TERMS_URL=https://SEU-DOMINIO/termos-de-uso/` e `EXPO_PUBLIC_PRIVACY_URL=https://SEU-DOMINIO/politica-de-privacidade/`. No Play Console, informe também `https://SEU-DOMINIO/exclusao-de-conta/`.
6. Confirme os dados reais tratados pelos SDKs e preencha Google Play Data Safety e App Store App Privacy. Teste os fluxos de exclusão, inclusive contas anônimas, e verifique que Termos e Privacidade são acessíveis nas configurações do app, não somente no paywall.
7. A exclusão web remove Firebase Auth. O app atual não possui exclusão automática do perfil RevenueCat: o responsável deve atender solicitações para esse fornecedor, observando dados de transação com retenção necessária. Não colocar Admin SDK ou API secreta RevenueCat no navegador.
8. Revise textos, base legal, critérios de retenção e políticas com a operação efetiva antes do lançamento. O site não garante aprovação das lojas. Não foram inventados CNPJ, endereço ou e-mail.

## Rotas

- `/`: landing com navegação mobile, prévias, FAQ e botões “Em breve” desativados, sem links fictícios para lojas.
- `/termos-de-uso/`
- `/politica-de-privacidade/`
- `/exclusao-de-conta/`: autenticação e exclusão Firebase opcional, sem coleta de senha por servidor próprio.

O site não instala anúncios, analytics ou cookies próprios de marketing. Firebase Auth na página de exclusão pode usar armazenamento de sessão/navegador. Fontes locais: Lora e Inter (licenças em public/fonts). Imagens: assets do projeto Dose de Estoicismo: Inspire-se.

## Fontes consultadas em 06/10/2026

- https://support.google.com/googleplay/android-developer/answer/10144311
- https://support.google.com/googleplay/android-developer/answer/13327111
- https://developer.apple.com/support/offering-account-deletion-in-your-app/
- https://developer.apple.com/app-store/review/guidelines/
- https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm

Diário local, backups legíveis, Firebase opcional e RevenueCat conforme o código do aplicativo fornecido. As políticas cobrem esse escopo; novas funções exigem revisão.

## Nova identidade
Nome nas lojas: Dose de Estoicismo: Inspire-se. A logo usa Dose de Estoicismo e a assinatura Inspire-se sem dois-pontos. A identidade foi atualizada no site; renomeie também o app Expo antes de publicar nas lojas. A URL da prévia foi mantida para preservar links existentes.
