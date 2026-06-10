const episoade = [
    {
        titlu: "Dialoguri Inspiraționale: MIRCEA MOGOȘEANU - Despre Teatru, de pe băncile școlii, până pe scena.",
        youtubeId: "QxnBYsFLTek",
        data: "30 Mar 2026",
        descriere: "Efectiv am fost fascinați să aflăm de la actorul Mircea Mogoșeanu cum a plecat chiar de pe băncile școlii și a ajuns sub lumina reflectoarelor. Un episod plin de emoție!"
    },
    {
        titlu: "Dialoguri Inspiraționale: ALINA DUMITRACHE - Despre modelul finlandez de educație.",
        youtubeId: "34A3xWMzziA",
        data: "21 Ian 2026",
        descriere: "Ne-am bucurat enorm de discuția cu Alina Dumitrache. Am povestit degajat despre modelul finlandez, dar și despre cum ne gestionăm emoțiile ca elevi, provocările școlii și legătura dintre profi și părinți."
    },
    {
        titlu: "Dialoguri Inspiraționale: DOINA RUȘTI - ADN-ul poveștilor Doinei Ruști",
        youtubeId: "HZD5_aJ9DVQ",
        data: "20 Dec 2025",
        descriere: "Am avut o invitată de nota 10! Ne-am lăsat purtați în universul magic al Doinei Ruști și am „furat” câteva din secretele ei de scriere creativă."
    },
    {
        titlu: "Dialoguri Inspiraționale: MARIUS MANOLE - Despre Teatru, Cultură și Provocări.",
        youtubeId: "oDYf1jrP54A",
        data: "28 Noi 2025",
        descriere: "Ne-am strâns cu toții la acest Bookcast SUPER special, mai ales că Marius Manole a fost atât de deschis și am povestit cum se vede arta și viața din perspectiva unui super-actor."
    },
    {
        titlu: "Dialoguri Inspiraționale: FLORIN STOICAN - Despre Geologie și Natură.",
        youtubeId: "G-mzi7cKPt4",
        data: "19 Oct 2025",
        descriere: "Împreună cu Florin am spart mitul că știința ar fi plictisitoare! Protejarea naturii a devenit pentru noi, după acest podcast, cea mai tare aventură."
    },
    {
        titlu: "Dialoguri Inspiraționale: ANA STĂNESCU - Despre PlaYouth.",
        youtubeId: "G3MRwcp_8bI",
        data: "29 Iun 2025",
        descriere: "O știm pe Ana încă din 2022, iar revederea ne-a umplut de energie. Am vorbit mult despre PlaYouth și cum joaca și creativitatea ne pot salva din banalitate!"
    },
    {
        titlu: "Dialoguri Inspiraționale: GELU DUMINICĂ - Cum să fim mai buni într-o lume dezbinată.",
        youtubeId: "akJ2pS5G8RE",
        data: "05 Mai 2025",
        descriere: "Un dialog mega-sincer despre empatie și puterea lui „împreună”. Gelu ne-a motivat grav să ne purtăm mai frumos cu cei din jurul nostru."
    },
    {
        titlu: "Interviuri cu cititori: Despre empatie și iubirea pentru lectură.",
        youtubeId: "nWEUG28o5kY",
        data: "04 Mai 2025",
        descriere: "Dacă te gândeai că acele cărți vechi din bibliotecă sunt uitate, interviul cu colega noastră, Alexia, îți va schimba total părerea. Aventură și lectură la superlativ!"
    },
    {
        titlu: "Dialoguri Inspiraționale: CRISTI DANILEȚ - Despre Lege, Reguli și Libertate",
        youtubeId: "KvsN3X98OM4",
        data: "06 Apr 2025",
        descriere: "Primul nostru mare interviu! Cristi Danileț a spart gheața și ne-a explicat super clar cum stă treaba cu libertatea, legile și responsabilitatea noastră ca adolescenți."
    },
    {
        titlu: "Interviu cu autorul: Insula Urâților",
        youtubeId: "VHjwu6abBj0",
        data: "16 Mai 2024",
        descriere: "După ce am devorat cartea «Insula Urâților», am pus mâna pe microfon și am luat-o la întrebări pe G.C.Kelis despre cum i-a venit ideea acestei povești super faine."
    },
    {
        titlu: "Podcast: Școala pentru Bine și Rău",
        youtubeId: "6HI5MycJloE",
        data: "13 Feb 2024",
        descriere: "Școală, magie, dar și tips&tricks pentru Evaluarea Națională! Un podcast foarte util, unde combinăm iubirea pentru cărțile fantasy cu sfaturi de supraviețuire la examene."
    },
    {
        titlu: "Interviu cu cititori - Anxietate, decizii - în Biblioteca de la miezul nopții, de Matt Haig.",
        youtubeId: "MExqi9bsMv4",
        data: "20 Feb 2023",
        descriere: "Anxietatea ne apasă pe mulți dintre noi, iar noi am decis să nu o băgăm sub preș. Plecând de la o carte senzațională («Biblioteca de la miezul nopții»), am abordat acest subiect sensibil."
    },
    {
        titlu: "Despre Bullying si Literatura | Podcast #1",
        youtubeId: "3FxQnVOzvvA",
        data: "30 Ian 2023",
        descriere: "Fenomenul de bullying ne privește pe toți. Împreună încercăm să tragem un semnal de alarmă și ne inspirăm de la eroii din viața reală și din cărți."
    },
];

const podcastContainer = document.getElementById('podcast-container');

if (podcastContainer) {
    const limita = podcastContainer.dataset.limit ? parseInt(podcastContainer.dataset.limit) : episoade.length;
    podcastContainer.innerHTML = '';

    episoade.slice(0, limita).forEach(episod => {

        podcastContainer.innerHTML += `
            <div class="glass-card rounded-2xl overflow-hidden flex flex-col group h-full">
                <div class="aspect-w-16 aspect-h-9 relative">
                    <iframe class="w-full h-56 rounded-t-2xl" src="https://www.youtube.com/embed/${episod.youtubeId}" title="${episod.titlu}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="p-6 flex-grow">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2 py-1 bg-indigo-100/50 text-indigo-700 text-xs font-bold rounded-md border border-indigo-200">${episod.data}</span>
                    </div>
                    <h3 class="font-bold text-lg text-slate-800 leading-tight mb-2 group-hover:text-indigo-600 transition-colors duration-200">${episod.titlu}</h3>
                    <p class="text-sm text-slate-600 line-clamp-3">${episod.descriere}</p>
                </div>
            </div>
        `;
    });
}