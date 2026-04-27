const episoade = [
    {
        titlu: "Dialoguri Inspiraționale: MIRCEA MOGOȘEANU - Despre Teatru, de pe băncile școlii, până pe scena.",
        youtubeId: "QxnBYsFLTek", 
        data: "21 Ian 2026",
        descriere: "Vorbim in acest episod cu Mircea Mogoșeanu, care ne va vorbi despre parcursul său în teatru, de la școală până la scena."
    },  
    {
        titlu: "Dialoguri Inspiraționale: ALINA DUMITRACHE - Despre modelul finlandez de educație.",
        youtubeId: "34A3xWMzziA", 
        data: "21 Ian 2026",
        descriere: "Vorbim in acest episod cu Alina Dumitrache, care ne va vorbi atât din rolul ei de director al Liceului Romano-Finlandez din București, cât si de psiholog si părinte, despre educație, despre modelul finlandez de educație, despre relația școală - familie și nu in ultimul rând despre managementul emoțiilor."
    },    
    {
        titlu: "Dialoguri Inspiraționale: DOINA RUȘTI - ADN-ul poveștilor Doinei Ruști",
        youtubeId: "HZD5_aJ9DVQ", 
        data: "20 Dec 2025",
        descriere: "O incursiune în universul ficțional al Doinei Ruști și secretele scrierii creative."
    },
    {
        titlu: "Dialoguri Inspiraționale: MARIUS MANOLE - Despre Teatru, Cultură și Provocări.",
        youtubeId: "oDYf1jrP54A", 
        data: "28 Noi 2025",
        descriere: "De data asta, am reușit să facem un Bookcast SUPER special: l-am invitat pe actorul Marius Manole să stea de vorbă cu noi!"
    },
    {
        titlu: "Dialoguri Inspiraționale: FLORIN STOICAN - Despre Geologie și Natură.",
        youtubeId: "G-mzi7cKPt4", 
        data: "19 Oct 2025",
        descriere: "Florin ne-a arătat că știința nu e deloc plictisitoare și că a proteja natura e una dintre cele mai tari aventuri pe care le poți avea."
    },
    {
        titlu: "Dialoguri Inspiraționale: ANA STĂNESCU - Despre PlaYouth.",
        youtubeId: "G3MRwcp_8bI", 
        data: "29 Iun 2025",
        descriere: "Ne cunoaștem cu Ana din 2022, când au venit în școala noastră printr-un proiect finanțat de Fundația „Nouă ne pasă”."
    },
    {
        titlu: "Dialoguri Inspiraționale: GELU DUMINICĂ - Cum să fim mai buni într-o lume dezbinată.",
        youtubeId: "akJ2pS5G8RE",
        data: "05 Mai 2025",
        descriere: "Gelu ne-a împărtășit perspectivele sale asupra empatiei și solidarității într-o lume tot mai divizată."
    },
    {
        titlu: "Interviuri cu cititori: Despre empatie și iubirea pentru lectură.",
        youtubeId: "nWEUG28o5kY",
        data: "04 Mai 2025",
        descriere: "Dacă credeai că o carte veche trebuie uitată și nu merită atenție, te invităm să o urmărești pe Alexia în acest interviu, care te va conduce prin toate peripețiile prin care trece Anna în încercarea de a salva cărțile."
    },
    {
        titlu: "Dialoguri Inspiraționale: CRISTI DANILEȚ - Despre Lege, Reguli și Libertate",
        youtubeId: "KvsN3X98OM4",
        data: "06 Apr 2025",
        descriere: "Acest podcast marchează debutul seriei de interviuri 'Dialoguri Inspiraționale', moderate de echipa Bookcast unde avem invitate personalități din diverse domenii de activitate din spațiul public."
    },
    {
        titlu: "Interviu cu autorul: Insula Urâților",
        youtubeId: "VHjwu6abBj0",
        data: "16 Mai 2024",
        descriere: "Am citit Insula Urâților, recent lansată, de autoarea G.C.Kelis și am stat de vorbă cu autoarea, pentru a afla mai multe."
    },
    {
        titlu: "Podcast: Școala pentru Bine și Rău",
        youtubeId: "6HI5MycJloE",
        data: "13 Feb 2024",
        descriere: "Podcastul prezintă un interviu despre seria de cărți „Școala pentru Bine și Rău”, informații despre autor și inclusiv TIPS&TRICKS pentru elevii care susțin examenul de Evaluare Națională."
    },
    {
        titlu: "Interviu cu cititori - Anxietate, decizii - în Biblioteca de la miezul nopții, de Matt Haig.",
        youtubeId: "MExqi9bsMv4",
        data: "20 Feb 2023",
        descriere: "Conform unor studiu din 2021 al Salvati copiii, 1 din 3 copii sau adolescenti s-a confruntat cu stări de anxietate și a avut nevoie de consiliere psihologică, cel mai adesea fiind adolescenții cei afectați, motiv pentru care nu puteam să nu abordăm și noi o astfel de temă."
    },
    {
        titlu: "Despre Bullying si Literatura | Podcast #1",
        youtubeId: "3FxQnVOzvvA",
        data: "30 Ian 2023",
        descriere: "Vorbim despre fenomenul bullying-ului in scoli, despre personalitati marcante care au luptat impotriva violentei si a discriminarii, inspirand generatiile urmatoare."
    },
];

const podcastContainer = document.getElementById('podcast-container');

if (podcastContainer) {
    const limita = podcastContainer.dataset.limit ? parseInt(podcastContainer.dataset.limit) : episoade.length;
    podcastContainer.innerHTML = '';

    episoade.slice(0, limita).forEach(episod => {

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