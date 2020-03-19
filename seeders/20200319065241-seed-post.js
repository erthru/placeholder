'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        id: 1,
        title: "Lorep Ipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo in utroque exercebantur, eaque disciplina effecit tantam illorum utroque in genere dicendi copiam. Quamquam tu hanc copiosiorem etiam soles dicere. Itaque homo in primis ingenuus et gravis, dignus illa familiaritate Scipionis et Laelii, Panaetius, cum ad Q. Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Duo Reges: constructio interrete. Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus. Et nemo nimium beatus est;",
        thumbnail: "thumbnail_one.jpg",
        authorId: 1
      },
      {
        id: 2,
        title: "Hanc Se Tuus Epicurus",
        body: "Hanc se tuus Epicurus omnino ignorare dicit quam aut qualem esse velint qui honestate summum bonum metiantur. Fadio Gallo, cuius in testamento scriptum esset se ab eo rogatum ut omnis hereditas ad filiam perveniret. Respondeat totidem verbis. Nec vero intermittunt aut admirationem earum rerum, quae sunt ab antiquis repertae, aut investigationem novarum. Cum autem in quo sapienter dicimus, id a primo rectissime dicitur. Sextilio Rufo, cum is rem ad amicos ita deferret, se esse heredem Q. ",
        thumbnail: "thumbnail_two.jpg",
        authorId: 2
      },
      {
        id: 3,
        title: "Haec Quo Modo Conveniant",
        body: "Haec quo modo conveniant, non sane intellego. Itaque dicunt nec dubitant: mihi sic usus est, tibi ut opus est facto, fac. A mene tu? Rem unam praeclarissimam omnium maximeque laudandam, penitus viderent, quonam gaudio complerentur, cum tantopere eius adumbrata opinione laetentur? Philosophi autem in suis lectulis plerumque moriuntur. Si enim ad populum me vocas, eum.",
        thumbnail: "thumbnail_three.jpg",
        authorId: 1
      },
      {
        id: 4,
        title: "Magni Enim Aestimabat",
        body: "Magni enim aestimabat pecuniam non modo non contra leges, sed etiam legibus partam. An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. Reperiam multos, vel innumerabilis potius, non tam curiosos nec tam molestos, quam vos estis, quibus, quid velim, facile persuadeam.",
        thumbnail: "thumbnail_four.jpg",
        authorId: 2
      },
      {
        id: 5,
        title: "Nec Enim",
        body: "Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit; Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? At iam decimum annum in spelunca iacet. Ergo, si semel tristior effectus est, hilara vita amissa est? Iam id ipsum absurdum, maximum malum neglegi. Ita fit illa conclusio non solum vera, sed ita perspicua, ut dialectici ne rationem quidem reddi putent oportere: si illud, hoc",
        thumbnail: "thumbnail_five.jpg",
        authorId: 2
      },
      {
        id: 6,
        title: "Cum Id Fugiunt",
        body: "Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. In contemplatione et cognitione posita rerum, quae quia deorum erat vitae simillima, sapiente visa est dignissima.",
        thumbnail: "thumbnail_six.jpg",
        authorId: 2
      },
      {
        id: 7,
        title: "Quodsi Vultum Tibi",
        body: "Quodsi vultum tibi, si incessum fingeres, quo gravior viderere, non esses tui similis; Quid enim de amicitia statueris utilitatis causa expetenda vides. Ille igitur vidit, non modo quot fuissent adhuc philosophorum de summo bono, sed quot omnino esse possent sententiae.",
        thumbnail: "thumbnail_seven.jpg",
        authorId: 1
      },
      {
        id: 8,
        title: "Sed Ita Falsa Sunt Ea",
        body: "Sed ita falsa sunt ea, quae consequuntur, ut illa, e quibus haec nata sunt, vera esse non possint. Quaeque de virtutibus dicta sunt, quem ad modum eae semper voluptatibus inhaererent, eadem de amicitia dicenda sunt. Est enim mihi magnae curae-quamquam hoc quidem proprium tuum munus est-, ut ita erudiatur, ut et patri et Caepioni nostro et tibi tam propinquo respondeat. An obliviscimur, quantopere in audiendo in legendoque moveamur, cum pie, cum amice, cum magno animo aliquid factum cognoscimus? Atque etiam valítudinem, vires, vacuitatem doloris non propter utilitatem solum, sed etiam ipsas propter se expetemus.",
        thumbnail: "thumbnail_eight.jpg",
        authorId: 1
      },
      {
        id: 9,
        title: "Ego Vero",
        body: "Ego vero volo in virtute vim esse quam maximam; Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest.",
        thumbnail: "thumbnail_nine.jpg",
        authorId: 1
      },
      {
        id: 10,
        title: "Cur Deinde Metrodori Liberos Commendas?",
        body: "Cur deinde Metrodori liberos commendas? Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam; Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. Hic Speusippus, hic Xenocrates, hic eius auditor Polemo, cuius illa ipsa sessio fuit, quam videmus. Quaero igitur, quo modo hae tantae commendationes a natura profectae subito a sapientia relictae sint. Est, ut dicis, inquam. Venit ad extremum",
        thumbnail: "thumbnail_ten.jpg",
        authorId: 2
      },
      {
        id: 11,
        title: "At Ille Non Pertimuit",
        body: "At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Ex quo intellegitur idem illud, solum bonum esse, quod honestum sit, idque esse beate vivere: honeste, id est cum virtute, vivere. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. At coluit ipse amicitias.",
        thumbnail: "thumbnail_eleven.jpg",
        authorId: 1
      },
      {
        id: 12,
        title: "Sin Kakan Malitiam Dixisses,",
        body: "Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Quod certe universum sua sponte ipsum expeti et propter se necesse est, quoniam ante demonstratum est etiam singulas eius partes esse per se expetendas. An quod ita callida est,",
        thumbnail: "thumbnail_twelve.jpg",
        authorId: 2
      },
      {
        id: 13,
        title: "Ut Optime Possit",
        body: "ut optime possit architectari voluptates? In omni enim animante est summum aliquid atque optimum, ut in equis, in canibus, quibus tamen et dolore vacare opus est et valere; Ita miser sit aliquando necesse est is, quem vos beatum semper vultis esse, nec vero id, dum omnia ad voluptatem doloremque referetis, efficietis umquam. Sed quid ages tandem, si utilitas ab amicitia, ut fit saepe, defecerit? Vide ne ista sint Manliana vestra aut maiora etiam, si imperes quod facere non possim. Non prorsus, inquit, omnisque, qui sine dolore sint, in voluptate, et ea quidem summa, esse dico.",
        thumbnail: "thumbnail_thirdteen.jpg",
        authorId: 2
      },
      {
        id: 14,
        title: "Etenim Semper Illud Extra Est",
        body: "Etenim semper illud extra est, quod arte comprehenditur. Ac tamen, ne cui loco non videatur esse responsum, pauca etiam nunc dicam ad reliquam orationem tuam. Epicurei num desistunt de isdem",
        thumbnail: "thumbnail_fourteen.jpg",
        authorId: 1
      },
      {
        id: 15,
        title: "De Quibus Et Ab Epicuro Scriptum Est Et Ab Antiquis",
        body: "de quibus et ab Epicuro scriptum est et ab antiquis, ad arbitrium suum scribere? Si in ipso corpore multa voluptati praeponenda sunt, ut vires, valitudo, velocitas, pulchritudo, quid tandem in animis censes? Aliter autem vobis placet. Nec enim ille respirat, ante quam emersit, et catuli aeque caeci, prius quam dispexerunt, ac si ita futuri semper essent. Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Itaque a sapientia praecipitur se ipsam, si usus sit, sapiens ut relinquat. Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; Ille igitur vidit, non modo quot fuissent adhuc philosophorum de summo bono, sed quot omnino esse possent sententiae. Quam si explicavisset, non tam haesitaret. Urgent tamen et nihil remittunt. Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur.",
        thumbnail: "thumbnail_fiveteen.jpg",
        authorId: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
