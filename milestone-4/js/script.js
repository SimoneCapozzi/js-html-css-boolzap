const app = new Vue({

  el:'#app',

  data:{
    user:{
      name: 'Nome utente',
      avatar: 'img/avatar_io.jpg'
    },

    utenteSelezionato: 0,

    testoInviato: '',

    lettereInserite: '',

    now: dayjs().format('DD/MM/YYYY HH:mm:ss'),

    risposte: ['ok', 'questa casa non è un albergo', 'no', 'a che ora torni', '5 min e sono li!'],

   
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        img:'img/avatar_1.jpg',
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        img:'img/avatar_2.jpg',
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        img:'img/avatar_3.jpg',
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        img:'img/avatar_4.jpg',
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]

  },methods:{

    invioTesto(){
      this.contacts[this.utenteSelezionato].messages.push(
        {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: this.testoInviato,
          status: 'sent',
        }
      )
      this.testoInviato = '';
      setTimeout(() => {
        this.contacts[this.utenteSelezionato].messages.push(
          {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            text: 'ok',
            status: 'received',
          }
        )
      },1000);
    },
    
   
  }


  /* let risp = this.risposte[Math.floor(math.random() * this.risposte.lenght -1) +1] */















})