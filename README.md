# i-Aspect front-end proefopdracht - Benny Chew

## Live demo

https://interbike-demo-react.vercel.app

## Figma UI mockup [1]

https://www.figma.com/file/n3ylUbsgkBqL7juDSyUoFO/InterBikes-(Shared)?type=design&node-id=0%3A1&mode=design&t=QCr4nmaZmcU6YTz3-1

Wachtwoord: iaspect

Zie /previews voor PNG previews.

## Update 12 april: Redesign UI/UX

https://www.figma.com/file/MutA0msdpWOTs7cx9tSG2Z/InterBikes-Redesign-(Shared)?type=design&node-id=0%3A1&mode=design&t=bV5wdiO5B8lNyV7w-1

## Hoe kun je de front-end lokaal runnen

1. Clone het project en open een Terminal venster.
2. Run <code>npm install</code> om alle benodigde dependencies te installeren.
3. Maak een <code>.env.local</code> aan in de root en voeg de gegevens toe die jullie via email hebben ontvangen.
4. <code>npm run dev</code> om de website te draaien d.m.v. een lokale server.

## Hoe kun je het CMS lokaal runnen

1. Open eerst een aparte Terminal venster om de front-end en het CMS tegerlijkertijd te kunnen runnen. Dat is handig om 'on de fly' updates te kunnen doen in het CMS en te zien hoe dit eruit ziet.
2. Vanuit het project interbike-demo-react (root) run <code>npm run dev:sanity</code> of eerst <code>cd studio</code> en daarna <code>npm run dev</code>
3. Inloggen bij Sanity vanuit de Terminal d.m.v. <code>sanity login</code>. Kies daarna Login type email.

## Uren

- HTML/CSS/Tailwind home page (desktop): Iets meer dan 1 dag
- Responsive home page: Halve dag
- Figma UI mockup: 1 dag [2]
- CMS (optioneel): Halve dag

## Update: Sanity CMS integratie toegevoegd

Alleen voor bepaalde onderdelen ter demonstratie (Header, Features en producten). Zie de query bij /src/pages/index.tsx en /studio.

Zie /previews voor PNG previews van Sanity CMS.

Zie /previews/cms-demo.mp4 voor een korte demo van Sanity CMS.

Update 9 april: Nu zie je dat de images bij Header en Features (de eerste 3 images) vanuit Sanity cdn komen (https://cdn.sanity.io/images/9w6rnb9o/production/b87ebdf7b9f9381a3eb1f1519e9f20794e43a61d-962x574.png) en niet meer vanuit benzai.github.io (https://benzai.github.io/staging-images/iaspect/iaspect-training.png).

## Werkwijze

- Next JS
- Tailwind CSS

Voordat ik met bouwen begon, heb ik eerst een Figma mockup gemaakt. Ik koos ervoor om het project te bouwen met behulp van Next JS en Tailwind CSS, omdat ik hiermee sneller kan werken. Uiteraard zijn de HTML/CSS templates relatief eenvoudig om te zetten naar bijvoorbeeld Laravel. Ik ben van plan om op korte termijn Laravel te leren. Hopelijk biedt i-Aspect ook trainingsmogelijkheden aan op dit gebied (WordPress/Elementor/enz). Ik heb in het verleden veel met PHP/MySQL gewerkt.

#### Design system

Een van de stappen in mijn Figma werkwijze is het opzetten van een design system. Dit heb ik ook gedaan bij de Interbikes mockup. Met name het kleurschema is opgezet m.b.v. design tokens. Dit design system heb ik vervolgens tijdens het bouwen eerst opgezet in o.a. globals.css en Tailwind config. Dit bespaart veel tijd en zorgt voor consistentie (font sizes, kleuren, enz vanuit een theme).

#### 'Design in code'

De meeste onderdelen heb ik 'nagebouwd' op basis van het Figma bestand. De mockup heb ik zelf gemaakt maar ironisch gezien raadpleeg ik het Figma bestand veelvuldig tijdens het bouwen (net zoals andere developers dat zouden doen). Een voorbeeld van een onderdeel dat ik 'on the fly' heb gebouwd omdat ik hiervoor geen Figma assets had gemaakt is de Producten sectie.

## Verbeterpunten front-end

Verbeterpunten:

- ARIA tags toevoegen
- HTML tags verbeteren
- Responsive image implementeren

Uitbreidingen:

- Mobile menu
- CMS

De genoemde punten zijn slechts suggesties en zijn niet van toepassing op de proefopdracht.

## Disclaimers

[1] Deze Figma mockup beschouw ik **niet** als een redesign of restyling. Een redesign of restyling vergt uiteraard meer tijd (requirements, user research, branding, concept designs, uitgebreidere design system, enz). Mijn doel is om op een beknopte manier te demonstreren hoe ik in Figma werk en hoe ik een website design opzet. Bovendien had ik niet de beschikking over het Sketch of Figma bestand en andere assets van het initiële design. Simpel gezegd heb ik het initiële design 'nagemaakt' met hier en daar mijn verbeterpunten voor de UI. Wat betreft UX heb ik vanwege tijdgebrek hier geen aandacht aan besteed.

[2] Dit zie ik als een extra opdracht (optioneel).

## Andere front-end voorbeelden

Dit is niet de eerste keer dat ik een website bouw (front-end). Ik heb ook ervaring met het integreren van een CMS, met name Sanity CMS. Ik heb ook gewerkt met Dato CMS en Contentful bijvoorbeeld. Hieronder zijn een aantal development projecten van mij:

AddOnn website (UI/UX, front-end, CMS, multi language)
https://add-onn.com

Hihaho (UI/UX, Swift, CoreData)
https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/nl/app/hihaho-player/id1031834953&ved=2ahUKEwiaoNTG1bKFAxXG6AIHHbkuCrkQFnoECA4QAQ&usg=AOvVaw3a9bYRBwfZzXNriWtXAF_1

Hihaho Android (port m.b.v. React Native)
https://play.google.com/store/apps/details?id=com.hihaho.hihahoplayerandroid&hl=en_US

Zie /@benny-very-old-frontend-projects voor voorbeelden van enkele (hele oude) front-end projecten (beetje PHP, Sass en normale CSS). Voordat ik mijn websites in React/Gatsby ging bouwen (en later Tailwind) heb ik ook met tools en frameworks gewerkt zoals Bootstrap, Foundation, Saas (SCSS), Grunt, Gulp, PHP/MySQL, enz.

Zie https://github.com/benzai/BennyChewDev voor meer informatie m.b.t. mijn development ervaring.
