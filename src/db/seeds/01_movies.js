exports.seed = function (knex) {
  return knex("movies").insert([
    {
      title: "Spirited Away",
      runtime_in_minutes: 125,
      rating: "PG",
      description:
        "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
      image_url:
        "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Interstellar",
      runtime_in_minutes: 169,
      rating: "PG-13",
      description:
        "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
    },
    {
      title: "Rear Window",
      runtime_in_minutes: 112,
      rating: "PG",
      description:
        'Professional photographer L.B. "Jeff" Jefferies breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. He begins to suspect that a man across the courtyard may have murdered his wife. Jeff enlists the help of his high society fashion-consultant girlfriend Lisa Freemont and his visiting nurse Stella to investigate...',
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg",
    },
    {
      title: "Raiders of the Lost Ark",
      runtime_in_minutes: 115,
      rating: "PG",
      description:
        "The year is 1936. An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_Ratio0.6716_AL_.jpg",
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      runtime_in_minutes: 117,
      rating: "PG",
      description:
        "Miles Morales is a New York teen struggling with school, friends and, on top of that, being the new Spider-Man. When he comes across Peter Parker, the erstwhile saviour of New York, in the multiverse, Miles must train to become the new protector of his city...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_Ratio0.6716_AL_.jpg",
    },
    {
      title: "Whiplash",
      runtime_in_minutes: 106,
      rating: "R",
      description:
        "A young and talented drummer attending a prestigious music academy finds himself under the wing of the most respected professor at the school; one who does not hold back on abuse towards his students. The two form an odd relationship as the student wants to achieve greatness, and the professor pushes him...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Metropolis",
      runtime_in_minutes: 153,
      rating: "NR",
      description:
        "Sometime in the future, the city of Metropolis is home to a Utopian society where its wealthy residents live a carefree life. One of those is Freder Fredersen. One day, he spots a beautiful woman with a group of children, she and the children quickly disappear. Trying to follow her, he is horrified to find an underground world of workers who apparently run the machinery that keeps the Utopian world above ground functioning...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Up",
      runtime_in_minutes: 96,
      rating: "PG",
      description:
        "As a boy, Carl Fredricksen wanted to explore South America and find the forbidden Paradise Falls. About 64 years later he gets to begin his journey along with Boy Scout Russell by lifting his house with thousands of balloons. On their journey, they make many new friends including a talking dog, and figure out that someone has evil plans. Carl soon realizes that this evildoer is his childhood idol...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Monty Python and the Holy Grail",
      runtime_in_minutes: 91,
      rating: "PG",
      description:
        "History is turned on its comic head when, in tenth century England, King Arthur (Graham Chapman) travels the countryside to find knights who will join him at the Round Table in Camelot. Gathering up the men is a tale in itself but after a bit of a party at Camelot, many decide to leave only to be stopped by God, who sends them on a quest: to find the Holy Grail...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Pan's Labyrinth",
      runtime_in_minutes: 91,
      rating: "PG",
      description:
        "In 1944 Falangist Spain, a girl, fascinated with fairy-tales, is sent along with her pregnant mother to live with her new stepfather, a ruthless captain of the Spanish army. During the night, she meets a fairy who takes her to an old faun in the center of the labyrinth. He tells her she's a princess, but must prove her royalty by surviving three gruesome tasks. If she fails, she will never prove herself to be the true princess and will never see her real father, the king, again...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMTU3ODg2NjQ5NF5BMl5BanBnXkFtZTcwMDEwODgzMQ@@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Dial M for Murder",
      runtime_in_minutes: 105,
      rating: "PG",
      description:
        "In London, wealthy Margot Mary Wendice had a brief love affair with the American writer Mark Halliday while her husband and professional tennis player Tony Wendice was on a tennis tour. Tony quits playing to dedicate to his wife and finds a regular job. She decides to give him a second chance for their marriage. When Mark arrives from America to visit the couple, Margot tells him that she had destroyed all his letters but one that was stolen...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BOWIwODIxYWItZDI4MS00YzhhLWE3MmYtMzlhZDIwOTMzZmE5L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "V for Vendetta",
      runtime_in_minutes: 132,
      rating: "R",
      description:
        'In the year 2032, Evey Hammond is an average citizen of the United Kingdom, which is under the rule of the fascist and tyrannical Norsefire Party. She is an employee of the state-run British Television Network, but soon, she becomes the number one enemy of the state together with an enigmatic and larger-than-life freedom fighter known only by the letter "V"...',
      image_url:
        "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Jurassic Park",
      runtime_in_minutes: 127,
      rating: "PG-13",
      description:
        "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond has invited four individuals, along with his two grandchildren, to join him at Jurassic Park...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Blade Runner",
      runtime_in_minutes: 117,
      rating: "PG-13",
      description:
        'In the twenty-first century, a corporation develops androids to be used as slaves in colonies outside of the Earth, identified as "replicants". In 2019, a former Police Officer is hired to hunt down a fugitive group of replicants living undercover in Los Angeles, California...',
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Gone Girl",
      runtime_in_minutes: 149,
      rating: "R",
      description:
        "On the occasion of his fifth wedding anniversary, Nick Dunne reports that his wife, Amy, has gone missing. Under pressure from the police and a growing media frenzy, Nick's portrait of a blissful union begins to crumble...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_Ratio0.6791_AL_.jpg",
    },
    {
      title: "Mad Max: Fury Roud",
      runtime_in_minutes: 120,
      rating: "R",
      description:
        "In 2029 the mutant population has shrunken significantly due to genetically modified plants designed to reduce mutant powers and the X-Men have disbanded. Logan, whose power to self-heal is dwindling, has surrendered himself to alcohol and now earns a living as a chauffeur. He takes care of the ailing old Professor X whom he keeps hidden away. One day, a female stranger asks Logan to drive a girl named Laura to the Canadian border...",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
    },
  ]);
};
