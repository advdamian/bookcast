// --- BAZA DE DATE ---

const episoade = [
    {
        titlu: "Dialoguri Inspiraționale: DOINA RUȘTI",
        youtubeId: "HZD5_aJ9DVQ", 
        data: "20 Dec 2025",
        descriere: "O incursiune în universul ficțional al Doinei Ruști și secretele scrierii creative."
    },
    {
        titlu: "Dialoguri Inspiraționale: MARIUS MANOLE - Despre Teatru, Cultură și Provocări",
        youtubeId: "oDYf1jrP54A", 
        data: "28 Nov 2025",
        descriere: "De data asta, am reușit să facem un Bookcast SUPER special: l-am invitat pe actorul Marius Manole să stea de vorbă cu noi!"
    },
    {
        titlu: "Dialoguri Inspiraționale: FLORIN STOICAN - Despre Geologie și Natură",
        youtubeId: "G-mzi7cKPt4", 
        data: "19 Oct 2025",
        descriere: "Florin ne-a arătat că știința nu e deloc plictisitoare și că a proteja natura e una dintre cele mai tari aventuri pe care le poți avea."
    },
    {
        titlu: "aaaaa",
        youtubeId: "G-mzi7cKPt4", 
        data: "19 Oct 2025",
        descriere: "Florin ne-a arătat că știința nu e deloc plictisitoare și că a proteja natura e una dintre cele mai tari aventuri pe care le poți avea."
    },
    {
        titlu: "bbbb",
        youtubeId: "G-mzi7cKPt4",
        data: "19 Oct 2025",
        descriere: "Florin ne-a arătat că știința nu e deloc plictisitoare și că a proteja natura e una dintre cele mai tari aventuri pe care le poți avea."
    },
    
    // Mai adaugă aici...
];

const ziare = [
    {
    numar: "Ediția 1 - Iarnă 2023",
    // Atenție: Nu mai punem ../ sau http, doar numele fișierului
    // pentru că suntem deja în folderul "buzz"
    linkCanva: "editia1.html", 
    coperta: "imagini/coperta1.jpg", // Asta rămâne așa dacă scriptul rulează ok
    descriere: "..."
    },
    {
        numar: "Ediția 4 - Toamnă 2023",
        linkCanva: "editia4.html",
        coperta: "imagini/coperta4.jpg",
        descriere: "Începutul anului școlar, bobocii și noile reguli din școală."
    },
    {
        numar: "Ediția 3 - Vară 2023",
        linkCanva: "editia3.html",
        coperta: "imagini/coperta3.jpg",
        descriere: "Recapitulare an școlar și planuri de vacanță."
    }
];

// --- LOGICA DE AFIȘARE (OPTIMIZATĂ) ---

// 1. Populare Podcasturi
const podcastContainer = document.getElementById('podcast-container');

if (podcastContainer) {
    const limita = podcastContainer.dataset.limit ? parseInt(podcastContainer.dataset.limit) : episoade.length;
    podcastContainer.innerHTML = '';

    episoade.slice(0, limita).forEach(episod => {
        // OPTIMIZARE: Am schimbat 'transition-all duration-300' cu 'transition-transform duration-200'
        podcastContainer.innerHTML += `
            <div class="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-200 ease-out overflow-hidden flex flex-col group hover:-translate-y-1">
                <div class="aspect-w-16 aspect-h-9 relative">
                    <iframe class="w-full h-56 rounded-t-2xl" src="https://www.youtube.com/embed/${episod.youtubeId}" title="${episod.titlu}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="p-5 flex-grow">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2 py-1 bg-indigo-100/50 text-indigo-700 text-xs font-bold rounded-md border border-indigo-200">${episod.data}</span>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 leading-tight mb-2 group-hover:text-indigo-600 transition-colors duration-200">${episod.titlu}</h3>
                    <p class="text-sm text-slate-600 line-clamp-2">${episod.descriere}</p>
                </div>
            </div>
        `;
    });
}

// 2. Populare Ziare
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
                    
                    <a href="${ziar.linkCanva}" target="_blank" class="block text-center w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 active:scale-95">
                        Răsfoiește Ziarul
                    </a>
                </div>
            </div>
        `;
    });
}

// --- MENIU MOBIL ---
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}