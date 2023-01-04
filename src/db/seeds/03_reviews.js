const content = `Lorem markdownum priores iactate receptus margine in motu ferreus pastor. Teneat
tua opifex regina, adest; similisque nec, me convivia ortus.

Est sontes praemia fatorum diversosque innubere rursus. Tanto inter commenta
tremulasque tergo donec Apollinei mearum: Hector colorum horruit.

> Cur repulsa matrem frequentes parvum coniuge ad nisi leto, ira. Orbis levatus
> o coniugis longis confinia *bello* rursus quem Atridae indulgere! Sanguine o
> operi flammas sorores suffundit et ilia. Nais edentem tamen. Acta munera enixa
> ad terram!

Sint sed per oppugnant Medusae Pagasaeae undique rebus cernit terram delituit
dilapsa tigres. Ait omne conatur nomen cumque, ad Minoa magna *dolentes*,
ageret. Sum addat, et unum iunge, aberant his indigenae facundia?

> Perdidit astra, si maternis sibi, Phoebi protinus senecta digitos. Atque
> suique **Lyrnesia**, prosunt suae mihi aqua, te!

Subsedit tantaque vulnera totiens aptos vivit digna pectoraque mutua. Duro ante
tibi perhorruit praedelassat simulat turis loco hunc dederat viscera scilicet
transitus quam longius aenea, concussaque hoc mille.

Ut erat. Tibi Themin corpore saepes.`;

const generateReviews = (criticIds, movieIds) => {
  return movieIds
    .map(({ movie_id }) => {
      return criticIds.map(({ critic_id }) => {
        return {
          content,
          score: Math.ceil(Math.random() * 5),
          critic_id,
          movie_id,
        };
      });
    })
    .reduce((a, b) => a.concat(b), [])
    .filter((reviews) => reviews.content);
};

exports.seed = async function (knex) {
  const criticIds = await knex("critics").select("critic_id");
  const movieIds = await knex("movies").select("movie_id");

  const reviews = generateReviews(criticIds, movieIds);
  return knex("reviews").insert(reviews);
};
