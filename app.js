// --- BAZA DE DATE ---

const episoade = [
    {
        titlu: "Dialoguri Inspiraționale: DOINA RUȘTI",
        youtubeId: "HZD5_aJ9DVQ", 
        data: "20 Dec 2025",
        descriere: "O incursiune în universul ficțional al Doinei Ruști și secretele scrierii creative."
    },
    {
        titlu: "Cum să înveți engleza ușor",
        youtubeId: "5qap5aO4i9A", 
        data: "01 Nov 2023",
        descriere: "Sfaturi practice pentru Cambridge și trucuri de învățare rapidă."
    },
    {
        titlu: "Despre viitorul educației",
        youtubeId: "dQw4w9WgXcQ", 
        data: "15 Oct 2023",
        descriere: "O discuție liberă despre școala viitorului și tehnologie."
    },
     // Mai adaugă aici...
];

const ziare = [
    {
        numar: "Ediția 5 - Iarnă 2023",
        linkCanva: "#", 
        coperta: "https://via.placeholder.com/300x400?text=Ziar+5", 
        descriere: "Ediție specială de Crăciun, interviuri cu profesori și colinde."
    },
    {
        numar: "Ediția 4 - Toamnă 2023",
        linkCanva: "#",
        coperta: "https://via.placeholder.com/300x400?text=Ziar+4",
        descriere: "Începutul anului școlar, bobocii și noile reguli din școală."
    },
    {
        numar: "Ediția 3 - Vară 2023",
        linkCanva: "#",
        coperta: "https://via.placeholder.com/300x400?text=Ziar+3",
        descriere: "Recapitulare an școlar și planuri de vacanță."
    }
];

// --- LOGICA DE AFIȘARE (DESIGN LIQUID GLASS) ---

// 1. Populare Podcasturi
const podcastContainer = document.getElementById('podcast-container');

if (podcastContainer) {
    const limita = podcastContainer.dataset.limit ? parseInt(podcastContainer.dataset.limit) : episoade.length;
    podcastContainer.innerHTML = '';

    episoade.slice(0, limita).forEach(episod => {
        // AICI ESTE DESIGNUL DE STICLĂ PENTRU VIDEO
        podcastContainer.innerHTML += `
            <div class="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1">
                <div class="aspect-w-16 aspect-h-9 relative">
                    <iframe class="w-full h-56 rounded-t-2xl" src="https://www.youtube.com/embed/${episod.youtubeId}" title="${episod.titlu}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="p-5 flex-grow">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2 py-1 bg-indigo-100/50 text-indigo-700 text-xs font-bold rounded-md border border-indigo-200">${episod.data}</span>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 leading-tight mb-2 group-hover:text-indigo-600 transition">${episod.titlu}</h3>
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
        // AICI ESTE DESIGNUL DE STICLĂ PENTRU ZIAR (Stil Amber/Gold)
        ziarContainer.innerHTML += `
            <div class="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg hover:shadow-amber-500/20 transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1 h-full">
                <div class="bg-gradient-to-br from-amber-100/50 to-orange-100/50 h-64 flex justify-center items-center p-4 relative overflow-hidden">
                    <div class="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                    <img src="${ziar.coperta}" alt="${ziar.numar}" class="relative h-full w-auto object-contain shadow-xl transform group-hover:scale-105 group-hover:rotate-2 transition duration-500 rounded-md">
                </div>
                
                <div class="p-6 flex flex-col flex-grow relative">
                    <h3 class="text-xl font-bold text-slate-800 mb-2">${ziar.numar}</h3>
                    <p class="text-slate-600 text-sm mb-6 flex-grow">${ziar.descriere}</p>
                    
                    <a href="${ziar.linkCanva}" target="_blank" class="block text-center w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/30 transition transform active:scale-95">
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