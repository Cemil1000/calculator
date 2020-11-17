const valeurs = [
    {
        valeur : '7',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '8',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '9',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '-',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '4',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '5',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '6',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '/',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '1',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '2',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '3',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '+',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '0',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '=',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : 'C',
        class : 'btn btn-outline-secondary'
    },
    {
        valeur : '*',
        class : 'btn btn-outline-secondary'
    },
]


// Delete All
document.querySelector('.cal').innerHTML=''
const main = document.querySelector('.cal');

// Ecrans All
const ecrans = document.createElement('div')
    ecrans.className =('output')
    main.appendChild(ecrans)

// Chiffre Actuel
const resultat = document.createElement('div');
    ecrans.appendChild(resultat);

// Chiffre Taper juste avant
const memoir = document.createElement('div');
    ecrans.appendChild(memoir);

// L'historique oslm
const historique = document.createElement('div');
    historique.className = ('overflow-auto')
    ecrans.appendChild(historique);

// Calcul Tout
function safeEval(str){
    return Function('return ' + str)()
}
function hist(){
    arr.push (memoir.textContent);
    console.log(arr);
    historique.textContent = arr
}
let arr = [];
for (let element of valeurs){
    const bouton = document.createElement('button');
    bouton.className = element.class;
    bouton.type = 'button';
    bouton.textContent = element.valeur;

    bouton.addEventListener(
        'click',function(){
            if (element.valeur == 'C') {
                resultat.textContent='';
                memoir.textContent='';
            }
            else if (element.valeur == '=') {
                memoir.textContent = resultat.textContent;
                let reponse = safeEval(resultat.textContent);
                resultat.textContent = reponse;
                memoir.textContent = memoir.textContent +'='+ resultat.textContent
                hist(memoir.textContent)
            }
            else{
                resultat.textContent += element.valeur;
            }
        }
    )
    main.appendChild(bouton);
}