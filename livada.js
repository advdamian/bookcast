const livada = [
    {
        titlu: "Rhododendron",
        categorie: "spatii-verzi",
        imagine: "../imagini/images.jpeg",
        link: "rhododendron.html",
        descriere: "Rhododendronul este un arbust ornamental cunoscut pentru florile sale spectaculoase."
    },
    {
        titlu: "Ienupăr",
        categorie: "spatii-verzi",
        link: "ienupar.html",
        imagine: "../imagini/ienupar.jpeg",
        descriere: "Ienupărul este un arbust ornamental cunoscut pentru conurile sale decorative și aroma sa distinctă."
    },
    {
        titlu: "Hortensia",
        categorie: "spatii-verzi",
        link: "hortensia.html",
        imagine: "../imagini/hortensia.jpeg",
        descriere: "Hortensia este o plantă perenă cunoscută pentru florile sale mari și colorate."
    },
    {
        titlu: "Iarbă de Pampas",
        categorie: "spatii-verzi",
        link: "iarba-de-pampas.html",
        imagine: "../imagini/iarba-de-pampas.jpeg",
        descriere: "Iarba de Pampas este o plantă perenă cunoscută pentru inflorescențele sale pufoase și aspectul său ornamental."
    },
    {
        titlu: "Photinia fraseri",
        categorie: "spatii-verzi",
        link: "photinia.html",
        imagine: "../imagini/photinia.jpeg",
        descriere: "Photinia fraseri este un arbust ornamental cunoscut pentru frunzele sale roșii și florile albe."
    },
    {
        titlu: "Loropetalum",
        categorie: "spatii-verzi",
        link: "loropetalum.html",
        imagine: "../imagini/loropetalum.jpeg",
        descriere: "Loropetalum este un arbust ornamental cunoscut pentru frunzele sale colorate și florile parfumate."
    },
    {
        titlu: "Thuja brabant",
        categorie: "spatii-verzi",
        link: "thuja.html",
        imagine: "../imagini/thuja.jpeg",
        descriere: "Thuja brabant este un arbust ornamental cunoscut pentru conurile sale decorative și aroma sa distinctă."
    },
    {
        titlu: "Trandafir",
        categorie: "spatii-verzi",
        link: "trandafir.html",
        imagine: "../imagini/trandafir.jpeg",
        descriere: "Trandafirul este o plantă perenă cunoscută pentru florile sale frumoase și parfumate."
    },
    {
        titlu: "Hydrangea macrophylla",
        categorie: "spatii-verzi",
        link: "hydrangea.html",
        imagine: "../imagini/hydrangea.jpeg",
        descriere: "Hydrangea macrophylla este o plantă perenă cunoscută pentru florile sale mari și colorate."
    },
    {
        titlu: "Hibiscus",
        categorie: "spatii-verzi",
        link: "hibiscus.html",
        imagine: "../imagini/hibiscus.jpeg",
        descriere: "Hibiscus este un arbust ornamental cunoscut pentru florile sale mari și colorate."
    },
    {
        titlu: "Panseluță",
        categorie: "pomi-fructiferi",
        link: "panseluta.html",
        imagine: "../imagini/panseluta.jpeg",
        descriere: "Panseluța este o plantă perenă cunoscută pentru florile sale colorate și aspectul său ornamental."
    },
    {
        titlu: "Măr",
        categorie: "pomi-fructiferi",
        link: "mar.html",
        imagine: "../imagini/mar.jpeg",
        descriere: "Mărul este un arbust ornamental cunoscut pentru florile și fructele sale."
    },
    {
        titlu: "Păr",
        categorie: "pomi-fructiferi",
        link: "par.html",
        imagine: "../imagini/par.jpeg",
        descriere: "Părul este un arbust ornamental cunoscut pentru florile și fructele sale."
    },
    {
        titlu: "Moșmon",
        categorie: "pomi-fructiferi",
        link: "mosmon.html",
        imagine: "../imagini/mosmon.jpeg",
        descriere: "Moșmonul este un arbust ornamental cunoscut pentru florile și fructele sale."
    },
    {
        titlu: "Gutui",
        categorie: "pomi-fructiferi",
        link: "gutui.html",
        imagine: "../imagini/gutui.jpeg",
        descriere: "Gutuiul este un arbust ornamental cunoscut pentru florile și fructele sale."
    },
    {
        titlu: "Prun",
        categorie: "pomi-fructiferi",
        link: "prun.html",
        imagine: "../imagini/prun.jpeg",
        descriere: "Prunul este un arbust ornamental cunoscut pentru florile și fructele sale."
    },
    {
        titlu: "Cireș",
        categorie: "pomi-fructiferi",
        link: "cires.html",
        imagine: "../imagini/cireș.jpeg",
        descriere: "Cireșul este un arbust ornamental cunoscut pentru florile și fructele sale."
    },
    {
        titlu: "Salcie",
        categorie: "livada-literara",
        link: "salcie.html",
        imagine: "../imagini/salcie.jpeg",
        descriere: "Salcia este un arbust ornamental cunoscut pentru frunzele sale lungi și flexibile."
    },
    {
        titlu: "Tei",
        categorie: "livada-literara",
        link: "tei.html",
        imagine: "../imagini/tei.jpeg",
        descriere: "Teiul este un arbust ornamental cunoscut pentru florile și frunzele sale parfumate."
    },
    {
        titlu: "Platan",
        categorie: "livada-literara",
        link: "platan.html",
        imagine: "../imagini/platan.jpeg",
        descriere: "Platanul este un arbust ornamental cunoscut pentru frunzele sale mari și umbra sa densă."
    },
    {
        titlu: "Roșcov",
        categorie: "livada-literara",
        link: "roscov.html",
        imagine: "../imagini/roscov.jpeg",
        descriere: "Roșcovul este un arbust ornamental cunoscut pentru florile și fructele sale."
    },
    {
        titlu: "Grădina Aromatică",
        categorie: "gradini-tematice",
        link: "gradina-aromatica.html",
        imagine: "../imagini/gradina-aromatica.jpeg",
        descriere: "Grădina Aromatică este un spațiu dedicat plantelor aromatice, oferind o varietate de ierburi și flori cu miros plăcut."
    },
    {
        titlu: "Grădina Medicinală",
        categorie: "gradini-tematice",
        link: "gradina-medicinala.html",
        imagine: "../imagini/gradina-medicinala.jpeg",
        descriere: "Grădina Medicinală este un spațiu dedicat plantelor medicinale, oferind o varietate de ierburi și flori cu proprietăți terapeutice."
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const livadaLoadingMsg = document.getElementById('livada-loading-msg');
    if(livadaLoadingMsg) livadaLoadingMsg.style.display = 'none';

    livada.forEach(livadaItem => {
        const container = document.getElementById(`container-${livadaItem.categorie}`);

        if (container) {
            container.innerHTML += `
                <div class="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-200 ease-out overflow-hidden flex flex-col group hover:-translate-y-1">
                    <div class="aspect-w-16 aspect-h-9 relative h-48">
                        <img src="${livadaItem.imagine}" alt="${livadaItem.titlu}" class="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="font-bold text-lg text-slate-800 leading-tight mb-2 group-hover:text-indigo-600 transition-colors duration-200">${livadaItem.titlu}</h3>
                        <p class="text-sm text-slate-600 mb-6 flex-grow">${livadaItem.descriere}</p>

                        <a href="${livadaItem.link}" class="mt-auto block text-center w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 active:scale-95">
                            Află povestea
                        </a>
                    </div>
                </div>
            `;
        }
    });
});