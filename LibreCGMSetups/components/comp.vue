Vue.component('comp', {
  props: ['kind'],
  computed: {
    desc : function () {
    if (this.kind == 'Xdrip+')
        return {text: 'Android aplikacija, sposobna primati podatke s mnogih tipova CGM senzora i MiaoMiao/Blucon odašiljača. Može i prikazivati podatke sakupljene od drugih aplikacija.', 
                advs : ['Odlična u kalibracijama','Puna funkcionalnosti', 'Radi i na Android satovima','Puno opcija za alarme','Podrška zajednice', 'Može i skenirati naslanjanjem na Libre'], 
                disadvs : ['Ne instalira se sa Google Play','Konfiguriranje nije jednostavno','Sa nekim uređajima ima problema sa bluetoothom'], 
                img : 'https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5cbefe2affa34d0081c98bef_xdrip%20app.jpg'};
    else if (this.kind == 'Glimp')
        return {text: 'Android aplikacija koja se spaja na MiaoMiao/Blucon odašiljače i očitava Libre senzore naslanjanjem.', 
                advs : ['Lagana instalacija - sa Google Play', 'Jednostavna konfiguracija', 'Stabilna', 'Radi i na Android satovima', 'Alarmi'],
                disadvs : ['Kalibracije znaju učiniti podatke nepreciznima'], 
                img : 'https://lh3.googleusercontent.com/UFSvD4_nkMS4T4Xkx6EaayMADhiWXpdECkaryeEN0uXSAHZBEJ0ThZsmsYSNT0-noBGd'};
    else if (this.kind == 'Nightscout')
        return {text: 'Web aplikacija i baza podataka. Proizveli je roditelji kako bi mogli pratiti glikemije svoje djece.', 
                advs : ['Dostupnost podataka','Podrška zajednice', 'Izvještaji'], 
                disadvs : ['Komplicirana instalacija','Alarmi sviraju samo kada je web stranica otvorena'], 
                img : 'http://www.nightscout.info/wp-content/uploads/2014/08/cropped-Header2.png'};
    else if (this.kind == 'NightGuard')
        return {text: 'IOS aplikacija koja podatke sa Nightscouta prikazuje i alarmira.', 
                advs : ['Alarmi','Jednostavnost','Radi i na Apple Watchu'], 
                disadvs : ['Ne može raditi u pozadini - mora biti otvorena'], 
                img : 'https://user-images.githubusercontent.com/10148160/55832977-b78c9d80-5ae4-11e9-8400-91240ccaf9c4.png'};
    else if (this.kind == 'Tomato')
        return {text: 'Službena aplikacija proizvođača MiaoMiao.', 
                advs : ['Jednostavno korištenje','Jednostavna instalacija'], 
                disadvs : ['Aplikacija zaostaje kvalitetom','Manje pouzdana'], 
                img : 'https://lh3.googleusercontent.com/L4IB3D5s4qYnMnF0v6I_bMlrRWnQRmDy6NEI-fGlUNr0waN6FbwT4JM5KELRlc6esUZz=w1559-h828-rw'};
    else if (this.kind == 'LinkBluCon')
        return {text: 'Službena aplikacija proizvođača Blucon Nightrider, za primanje podataka sa njega.', 
                advs : ['Jednostavno korištenje','Jednostavna instalacija'], 
                disadvs : ['Aplikacija zaostaje kvalitetom','Manje pouzdana'], 
                img : 'https://lh3.googleusercontent.com/cbXl4IYCRZj92NeTNj5RHfNekGfkYOkeHUEFTteA2F9T9a6IPeExbye92gG_wTP6ml4=w1559-h828-rw'};
    else if (this.kind == 'FollowBluCon')
        return {text: 'Službena aplikacija proizvođača Blucon Nightrider, za praćenje podataka sakupljenih LinkBluCon aplikacijom.', 
                advs : ['Jednostavno korištenje','Moguće praćenje više korisnika'], 
                disadvs : ['Aplikacija zaostaje kvalitetom'], 
                img : 'https://lh3.googleusercontent.com/r41bvO65ctGKf30FQ3vo44YV-t1UgfzKmw0V1WU0l84BTM0meMAXDi051hmO4U7V5do=w1559-h828-rw'};
    else if (this.kind == 'Direktno')
        return {text: 'Komunikacija se zbiva internetom, ali se podaci tamo ne spremaju.', 
                advs : ['Jedna kompnenta manje','Brz prijenos podataka'], 
                disadvs : ['nema'], 
                img : 'https://www.abc.net.au/news/image/2647380-3x2-940x627.jpg'};
    else if (this.kind == 'Spike')
        return {text: 'IOS aplikacija, sposobna primati podatke s mnogih tipova CGM senzora i MiaoMiao/Blucon odašiljača. Može i prikazivati podatke sakupljene od drugih aplikacija.', 
                advs : ['Puna funkcionalnosti','Alarmi'], 
                disadvs : ['Vrlo komplicirana instalacija','Potrebna periodička reinstalacija aplikacije'], 
                img : 'https://spike-app.com/wp-content/uploads/2019/03/iPhoneXSpikeHome2019.png'};
    else if (this.kind == 'DropBox')
        return {text: 'Spremište podataka na internetu, kojeg Glimp može upotrebljavati za razmjenu informacija.', 
                advs : ['Laka konfiguracija','Omogućuje i otvaranje podataka na GlimpForWeb aplikaciji'], 
                disadvs : ['Rudimentarno','Potrebno otvoriti račun'], 
                img : 'https://media3.s-nbcnews.com/j/streams/2013/july/130715/6c8275179-dropbox-logo-120718.nbcnews-ux-1024-900.jpg'};
    else if (this.kind == '-')
        return {text: 'U ovoj konfiguraciji ovakve komponente nema.', 
                advs : ['Jedna kompnenta manje'], 
                disadvs : ['-'], 
                img : 'https://media1.tenor.com/images/4c558c5dbff1828f2b87582dc49526e8/tenor.gif?itemid=13776523'};
    else if (this.kind == 'Serveri proizvođača')
        return {text: 'Spremište podataka pod kontrolom proizvođača softvera koji razmjenjuje podatke.', 
                advs : ['Nema konfiguracija i instalacija'], 
                disadvs : ['Privatnost podataka'], 
                img : 'https://techcrunch.com/wp-content/uploads/2018/10/servers.jpg?w=1390&crop=1'};

    else
        return {text: 'Nepoznata komponenta', 
                advs : ['-'], 
                disadvs : ['-'],
                img : 'https://media.tenor.com/images/514fb4c261d074dac2220703f16a4ea0/tenor.gif'};
  }

  },
  template: `
<v-card dark>
<v-img
  :src="desc.img"
  class="white--text"
  height="150px"
  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0, .9)"
       position="top"
>
  <v-card-title
    class="fill-height align-end"
                :class="{'subheading': $vuetify.breakpoint.xs}"
  >{{kind}}</v-card-title>
</v-img>

    <v-card-text>{{ desc.text }}
    </v-card-text>
    
    <v-list dense>
        <v-subheader>Prednosti</v-subheader>
        
            <v-list-item v-for="adv in desc.advs" class="green">
            {{adv}}
            </v-list-item>
    </v-list>
    
       <v-list dense>
        <v-subheader>Nedostaci</v-subheader>
        
            <v-list-item v-for="disadv in desc.disadvs"  class="red">
            {{disadv}}
            </v-list-item>
    </v-list>
</v-card>
`
})