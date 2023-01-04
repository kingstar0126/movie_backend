exports.seed = function (knex) {
  return knex("critics").insert([
    {
      preferred_name: "Chana",
      surname: "Gibson",
      organization_name: "Film Frenzy",
    },
    {
      preferred_name: "Maria",
      surname: "Cooke",
      organization_name: "The Spool",
    },
    {
      preferred_name: "Bret",
      surname: "Moss",
      organization_name: "Film Companion",
    },
    {
      preferred_name: "Alex",
      surname: "Grimes",
      organization_name: "AV Club",
    },
    {
      preferred_name: "Mel",
      surname: "Delgado",
      organization_name: "TIME Magazine",
    },
    {
      preferred_name: "Lea",
      surname: "Vetzer",
      organization_name: "London Evening Standard",
    },
    {
      preferred_name: "Abhi",
      surname: "Patil",
      organization_name: "Independent (UK)",
    },
  ]);
};
