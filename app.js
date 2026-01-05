// --- BAZA DE DATE ---

const episoade = [
    {
        titlu: "Dialoguri Inspiraționale: DOINA RUȘTI - ADN-ul poveștilor Doinei Ruști",
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
    // Adaugă oricâte aici...
];

const ziare = [
    {
        numar: "Ediția 5 - Iarnă 2023",
        linkCanva: "https://www.canva.com/design/DAF...", // Link-ul real
        coperta: "https://via.placeholder.com/300x400?text=Ziar+5", // Link poză copertă
        descriere: "Ediție specială de Crăciun."
    },
    {
        numar: "Ediția 4 - Toamnă 2023",
        linkCanva: "#",
        coperta: "https://via.placeholder.com/300x400?text=Ziar+4",
        descriere: "Începutul anului școlar și bobocii."
    }
];

// --- LOGICA DE AFIȘARE ---

// 1. Populare Podcasturi (Doar pe Home sau pagini unde există containerul)
const podcastContainer = document.getElementById('podcast-container');
if (podcastContainer) {
    // Dacă suntem pe Home, arătăm doar ultimele 3. Altfel le arătăm pe toate (daca ai face pagină separată)
    const limita = podcastContainer.dataset.limit ? parseInt(podcastContainer.dataset.limit) : episoade.length;
    
    episoade.slice(0, limita).forEach(episod => {
        podcastContainer.innerHTML += `
            <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100">
                <div class="aspect-w-16 aspect-h-9">
                    <iframe class="w-full h-48" src="https://www.youtube.com/embed/${episod.youtubeId}" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="p-4">
                    <div class="text-xs text-blue-600 font-bold uppercase mb-1">${episod.data}</div>
                    <h3 class="font-bold text-gray-800 mb-2">${episod.titlu}</h3>
                </div>
            </div>
        `;
    });
}

// 2. Populare Ziare (Doar pe pagina Ziar)
const ziarContainer = document.getElementById('ziar-container');
if (ziarContainer) {
    ziare.forEach(ziar => {
        ziarContainer.innerHTML += `
            <div class="flex flex-col md:flex-row bg-white rounded-xl shadow overflow-hidden border border-yellow-100 mb-6">
                <div class="md:w-1/4 bg-yellow-50 flex justify-center items-center p-4">
                    <img src="${ziar.coperta}" class="h-48 shadow-md rotate-2 border-4 border-white">
                </div>
                <div class="p-6 md:w-3/4 flex flex-col justify-center">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">${ziar.numar}</h3>
                    <p class="text-gray-600 mb-4">${ziar.descriere}</p>
                    <div>
                        <a href="${ziar.linkCanva}" target="_blank" class="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                            Citește Online
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}