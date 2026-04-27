const livada = [
    {
        titlu: "Nuc",
        imagine: "abcd1234",
        link: "nuc.html",
        descriere: "Nucul este un copac fructifer care produce nuci."
    },
    {
        titlu: "Roșcov",
        link: "roscov.html",
        imagine: "efgh5678",
        descriere: "Roșcovul este un copac care produce roșcove, un fruct dulce și hrănitor."
    }
];

const livadaContainer = document.getElementById('livada-container');
const livadaLoadingMsg = document.getElementById('livada-loading-msg');

if (livadaContainer) {
    if(livadaLoadingMsg) livadaLoadingMsg.style.display = 'none';

    livada.forEach(livadaItem => {
        livadaContainer.innerHTML += `
            <div class="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-200 ease-out overflow-hidden flex flex-col group hover:-translate-y-1">
                <div class="aspect-w-16 aspect-h-9 relative">
                    <img src="${livadaItem.imagine}" alt="${livadaItem.titlu}" class="w-full h-full object-cover rounded-t-2xl">
                </div>
                <div class="p-5 flex-grow">
                    <h3 class="font-bold text-lg text-slate-800 leading-tight mb-2 group-hover:text-indigo-600 transition-colors duration-200">${livadaItem.titlu}</h3>
                    <p class="text-sm text-slate-600 mb-6 flex-grow">${livadaItem.descriere}</p>

                    <a href="${livadaItem.link}" class="block text-center w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 active:scale-95">
                        Află mai multe
                    </a>
                </div>
            </div>
        `;
    });
}

