const ziare = [
    {
        numar: "Ediția 9 - Ian 2026",
        linkCanva: "editia9.html",
        coperta: "/imagini/coperta9.jpeg",
        descriere: "Am povestit cu actorul Mircea Mogoșeanu despre nebunia anilor de liceu. Ne-am mai luat timp și să-l onorăm pe Eminescu, dar și să mai dăm din casă ce cărți bune ni s-au lipit de degete în ultima vreme."
    },
    {
        numar: "Ediția 8 - Dec 2025",
        linkCanva: "editia8.html",
        coperta: "/imagini/coperta8.jpeg",
        descriere: "Ne-am aprofundat emoțiile! Partea a doua a interviului cu Doina Ruști și o super dezbatere cu Alina Dumitrache despre cum simțim cu adevărat școala de azi, cu toate bunele și relele ei."
    },
    {
        numar: "Ediția 7 - Noi 2025",
        linkCanva: "editia7.html",
        coperta: "/imagini/coperta7.jpeg",
        descriere: "Scriitoarea Doina Ruști a fost pusă pe scaunul de interviu și a răspuns la TOATE curiozitățile noastre. Apoi, la fel ca niște adevărați jurnaliști, am scris cronică de film și am stat de vorbă despre muzică de calitate."
    },
    {
        numar: "Ediția 6 - Oct 2025",
        linkCanva: "editia6.html",
        coperta: "/imagini/coperta6.jpeg",
        descriere: "Marius Manole ne-a demonstrat că e absolut OK să fii vulnerabil. Mai presărăm niște recenzii proaspete de prin sălile de spectacol, direct de la echipa noastră din teren!"
    },
    {
        numar: "Ediția 5 - Sep 2025",
        linkCanva: "editia5.html",
        coperta: "/imagini/coperta5.jpeg",
        descriere: "Ediția de toamnă în care ne reconectăm cu natura, alături de Florin Stoican! Bineînțeles, am băgat și porția noastră obișnuită de filme faine și muzică bună."
    },
    {
        numar: "Ediția 4 - Mai 2025",
        linkCanva: "editia4.html",
        coperta: "/imagini/coperta4.jpeg",
        descriere: "Gelu Duminică ne-a deschis ochii cu o discuție onestă despre echitate. În plus: ofertele școlilor, recenzii ca la carte și povești savuroase de la Noaptea Muzeelor!"
    },
    {
        numar: "Ediția 3 - Apr 2025",
        linkCanva: "editia3.html",
        coperta: "/imagini/coperta3.jpeg",
        descriere: "Am încheiat seria cu domnul judecător Danileț și ne-am lămurit super clar cum stă treaba cu libertatea. Ne-am molipsit și de energia PlaYouth și v-am adus ultimele ponturi literare."
    },
    {
        numar: "Ediția 2 - Mar 2025",
        linkCanva: "editia2.html",
        coperta: "/imagini/coperta2.jpeg",
        descriere: "Subiect greu în ediția asta: bullying și cum ne protejăm pe net, alături de Cristi Danileț. Partea frumoasă e că am învățat și de la Ana Stănescu că ne putem educa jucându-ne!"
    },
    {
        numar: "Ediția 1 - Feb 2025",
        linkCanva: "editia1.html", 
        coperta: "/imagini/coperta1.jpeg",
        descriere: "Prima noastră ediție e foc! L-am descusut pe judecătorul Cristi Danileț despre carieră și legi. O doză perfectă de cunoaștere pentru orice elev cu capul pe umeri."
    },
];

const ziarContainer = document.getElementById('ziar-container');
const loadingMsg = document.getElementById('loading-msg');

if (ziarContainer) {
    if(loadingMsg) loadingMsg.style.display = 'none';

    ziare.forEach(ziar => {
        ziarContainer.innerHTML += `
            <div class="glass-card rounded-2xl overflow-hidden flex flex-col group h-full">
                <div class="bg-gradient-to-br from-amber-100/50 to-orange-100/50 h-64 flex justify-center items-center p-4 relative overflow-hidden">
                    <div class="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                    <img src="${ziar.coperta}" alt="${ziar.numar}" loading="lazy" class="relative h-full w-auto object-contain shadow-xl transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300 rounded-md">
                </div>
                
                <div class="p-6 flex flex-col flex-grow relative">
                    <div class="mb-3">
                        <span class="inline-block text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200/50 px-2 py-1 rounded-md mb-2">⏱️ ~10 min lectură</span>
                        <h3 class="text-xl font-bold text-slate-800 leading-tight">${ziar.numar}</h3>
                    </div>
                    <p class="text-slate-600 text-sm mb-6 flex-grow">${ziar.descriere}</p>
                    
                    <a href="${ziar.linkCanva}" class="block text-center w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 active:scale-95">
                        Răsfoiește Ziarul
                    </a>
                </div>
            </div>
        `;
    });
}