# Eletrocar Auto Elétrica e Ar Condicionado - site institucional

Site one-page da **Eletrocar**: auto elétrica e ar-condicionado para carros, caminhões, tratores e máquinas agrícolas em Lucas do Rio Verde - MT. Slogan: "Seu carro em boas mãos."

## Estrutura

```
index.html   # página única (hero, sobre, serviços, galeria, ar-condicionado, depoimentos, mapa, FAQ)
styles.css   # estilos (tema claro/escuro automático, vermelho da marca)
script.js    # link do WhatsApp, menu mobile, header, animações, galeria ampliada, carrossel, FAQ
assets/      # logo, favicon, fotos e posts
```

Sem build: HTML, CSS e JS puros. Publique a pasta em GitHub Pages, Netlify, Vercel ou hospedagem comum.

## Dados usados (posts da empresa)

- Telefone/WhatsApp: (65) 99229-5010 (`wa.me/5565992295010`, constante `WHATSAPP` no `script.js`)
- Endereço: Av. Ângelo Antônio Dall'Alba, 2742-S, Bairro Veneza, ao lado da pista de bicicross, Lucas do Rio Verde - MT
- Horário: segunda a sexta das 07:00 às 18:00, sábado das 07:00 às 11:00

O botão da seção de ar-condicionado abre o WhatsApp com uma mensagem própria (atributo `data-msg`).

## Antes de publicar

- **Endereço**: o perfil do WhatsApp mostrava "Avenida Anelo Antônio Dall Alba, Cerrado" e o post de revisão elétrica mostra "Av. Ângelo Antônio Dal'alba, 2742s, Bairro Veneza". O site usa o do post. Confirme o bairro e o número, e se o mapa aponta para o lugar certo.
- **Depoimentos** são exemplos. Substitua por avaliações reais de clientes.
- **FAQ**: confirme cobrança do diagnóstico e formas de pagamento.

## Imagens

- `logo.png`, `favicon.png` (recorte do emblema do logo), `oficina-1.jpg`, `oficina-2.jpg`, `cabecote.jpg` (recorte do post de cabeçote) e `posts/`: material da própria empresa.
- `hero.jpg`, `eletrica.jpg`, `ar.jpg`, `bateria.jpg`, `farol.jpg`, `climatizador.jpg`: [Unsplash](https://unsplash.com) (licença Unsplash).
- Os posts "Bom dia" e "Estamos contratando" não entraram no site.
