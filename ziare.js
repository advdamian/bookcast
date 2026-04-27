const ziare = [
    {
        numar: "Ediția 8 - Dec 2025",
        linkCanva: "editia8.html",
        coperta: "/imagini/coperta8.jpeg",
        descriere: "Continuăm interviul cu scriitoarea Doina Ruști, după care ne uităm cu mai multă atenție la noi, la emoțiile noastre și la școală, așa cum este ea astăzi, cu provocări, cu probleme, cu oportunități și cu multă dedicare, cu Alina Dumitrache, psiholog și director al Liceului Româno-Finlandez din București."
    },
    {
        numar: "Ediția 7 - Noi 2025",
        linkCanva: "editia7.html",
        coperta: "/imagini/coperta7.jpeg",
        descriere: "Doina Ruști răspunde tuturor întrebărilor noastre despre literatură. Recenzii de carte, cronica de film, biografii și impresii despre Cealaltă voce, un concert cameral de pian cu Marius Manole și Mihai Ritivoiu."
    },
    {
        numar: "Ediția 6 - Oct 2025",
        linkCanva: "editia6.html",
        coperta: "/imagini/coperta6.jpeg",
        descriere: "Despre vulnerabilitate și determinare cu actorul Marius Manole, însă incursiunea în arta spectacolului continuă cu cronici și impresii din sala de spectacol."
    },
    {
        numar: "Ediția 5 - Sep 2025",
        linkCanva: "editia5.html",
        coperta: "/imagini/coperta5.jpeg",
        descriere: "Despre natură și responsabilitate, despre parcuri naturale și conservarea ariilor naturale cu geologul Florin Stoican, în plus, cronică de film, istorie și muzică."
    },
    {
        numar: "Ediția 4 - Mai 2025",
        linkCanva: "editia4.html",
        coperta: "/imagini/coperta4.jpeg",
        descriere: "Un dialog onest despre echitate și incluziune cu sociologul Gelu Duminică. Oferte universitare, Noaptea muzeelor, recenzii de carte și multe altele."
    },
    {
        numar: "Ediția 3 - Apr 2025",
        linkCanva: "editia3.html",
        coperta: "/imagini/coperta3.jpeg",
        descriere: "Ultima parte a discuției cu judecătorul Cristi Danileț este despre libertăți, responsabilitate în fața legii și drepturi. Ana Stănescu ne povestește despre proiectele PlaYouth, iar noi vă aducem cele mai noi informații de la lansările de carte din Craiova."
    },
    {
        numar: "Ediția 2 - Mar 2025",
        linkCanva: "editia2.html",
        coperta: "/imagini/coperta2.jpeg",
        descriere: "Continuăm discuția cu judecătorul Cristi Danileț despre reguli, bullying&cyberbullying, sancțiuni și pedepse. Discutam si cu Ana Stănescu despre educația prin joacă și civism."
    },
    {
        numar: "Ediția 1 - Feb 2025",
        linkCanva: "editia1.html", 
        coperta: "/imagini/coperta1.jpeg",
        descriere: "De vorbă cu judecătorul Cristi Danileț despre cariera juridică, drepturi și libertăți."
    },
];

const ziarContainer = document.getElementById('ziar-container');
const loadingMsg = document.getElementById('loading-msg');

if (ziarContainer) {
    if(loadingMsg) loadingMsg.style.display = 'none';

    ziare.forEach(ziar => {
        // OPTIMIZARE: La fel, tranziții mai rapide și specifice
        ziarContainer.innerHTML += `
            <div class="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-200 ease-out overflow-hidden flex flex-col group hover:-translate-y-1 h-full">
                <div class="bg-gradient-to-br from-amber-100/50 to-orange-100/50 h-64 flex justify-center items-center p-4 relative overflow-hidden">
                    <div class="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                    <img src="${ziar.coperta}" alt="${ziar.numar}" class="relative h-full w-auto object-contain shadow-xl transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300 rounded-md">
                </div>
                
                <div class="p-6 flex flex-col flex-grow relative">
                    <h3 class="text-xl font-bold text-slate-800 mb-2">${ziar.numar}</h3>
                    <p class="text-slate-600 text-sm mb-6 flex-grow">${ziar.descriere}</p>
                    
                    <a href="${ziar.linkCanva}" class="block text-center w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 active:scale-95">
                        Răsfoiește Ziarul
                    </a>
                </div>
            </div>
        `;
    });
}