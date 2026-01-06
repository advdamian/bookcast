// --- BAZA DE DATE ---

const episoade = [
    {
        titlu: "Dialoguri Inspiraționale: DOINA RUȘTI - ADN-ul poveștilor",
        youtubeId: "HZD5_aJ9DVQ", 
        data: "20 Dec 2025",
        descriere: "O incursiune în universul ficțional al Doinei Ruști."
    },
    {
        titlu: "Cum să înveți engleza ușor",
        youtubeId: "5qap5aO4i9A", 
        data: "01 Nov 2023",
        descriere: "Sfaturi practice pentru Cambridge."
    },
    {
        titlu: "Despre viitorul educației",
        youtubeId: "dQw4w9WgXcQ", // Exemplu ID (schimbă cu unul real)
        data: "15 Oct 2023",
        descriere: "O discuție liberă despre școala viitorului."
    },
    // Poți adăuga mai multe aici...
];

const ziare = [
    {
        numar: "Ediția 5 - Iarnă 2023",
        linkCanva: "#", // Pune link-ul tău real aici
        coperta: "https://via.placeholder.com/300x400?text=Coperta+Ziar+5", 
        descriere: "Ediție specială de Crăciun, interviuri cu profesori și colinde."
    },
    {
        numar: "Ediția 4 - Toamnă 2023",
        linkCanva: "#",
        coperta: "https://via.placeholder.com/300x400?text=Coperta+Ziar+4",
        descriere: "Începutul anului școlar, bobocii și noile reguli din școală."
    },
    {
        numar: "Ediția 3 - Vară 2023",
        linkCanva: "#",
        coperta: "https://via.placeholder.com/300x400?text=Coperta+Ziar+3",
        descriere: "Recapitulare an școlar și planuri de vacanță."
    }
];

// --- LOGICA DE AFIȘARE ---

// 1. Populare Podcasturi
const podcastContainer = document.getElementById('podcast-container');

if (podcastContainer) {
    // Verificăm limita setată în HTML (data-limit) sau afișăm tot
    const limita = podcastContainer.dataset.limit ? parseInt(podcastContainer.dataset.limit) : episoade.length;
    
    // Curățăm containerul înainte (opțional)
    podcastContainer.innerHTML = '';

    episoade.slice(0, limita).forEach(episod => {
        podcastContainer.innerHTML += `
            <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                <div class="aspect-w-16 aspect-h-9 relative group">
                    <iframe class="w-full h-56" src="https://www.youtube.com/embed/${episod.youtubeId}" title="${episod.titlu}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="p-5 flex-grow">
                    <div class="text-xs text-blue-600 font-bold uppercase mb-2 tracking-wide">${episod.data}</div>
                    <h3 class="font-bold text-lg text-gray-800 leading-tight mb-2">${episod.titlu}</h3>
                    <p class="text-sm text-gray-500 line-clamp-2">${episod.descriere}</p>
                </div>
            </div>
        `;
    });
}

// 2. Populare Ziare
const ziarContainer = document.getElementById('ziar-container');
const loadingMsg = document.getElementById('loading-msg');

if (ziarContainer) {
    // Ascundem mesajul de încărcare
    if(loadingMsg) loadingMsg.style.display = 'none';

    ziare.forEach(ziar => {
        // AM SCHIMBAT AICI: Design vertical pentru Grid
        ziarContainer.innerHTML += `
            <div class="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 border border-yellow-100 overflow-hidden flex flex-col h-full group">
                <div class="bg-yellow-50 h-64 flex justify-center items-center p-4 overflow-hidden relative">
                    <img src="${ziar.coperta}" alt="${ziar.numar}" class="h-full w-auto object-contain shadow-md transform group-hover:scale-105 group-hover:rotate-3 transition duration-500 border-4 border-white">
                </div>
                
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${ziar.numar}</h3>
                    <p class="text-gray-600 text-sm mb-6 flex-grow">${ziar.descriere}</p>
                    
                    <a href="${ziar.linkCanva}" target="_blank" class="block text-center w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-bold hover:bg-blue-700 hover:-translate-y-1 transition transform shadow-md">
                        Citește Online
                    </a>
                </div>
            </div>
        `;
    });
}

// --- LOGICA MENIU MOBIL ---
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}