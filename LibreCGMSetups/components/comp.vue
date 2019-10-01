Vue.component('comp', {
  props: ['kind'],
  computed: {
    desc : function () {
    if (this.kind == 'Xdrip+')
        return {text: 'Android aplikacija, sposobna primati podatke s mnogih tipova CGM senzora i MiaoMiao/Blucon odašiljača. Može i prikazivati podatke sakupljene od drugih aplikacija.', 
                advs : ['Odlična u kalibracijama','Puna funkcionalnosti', 'Radi i na Android satovima','Puno opcija za alarme','Podrška zajednice', 'Može i skenirati naslanjanjem na Libre'], 
                disadvs : ['Ne instalira se sa Google Play','Konfiguriranje nije jednostavno','Sa nekim uređajima ima problema sa bluetoothom'], 
                img : 'img/xdrip.jpg'};
    else if (this.kind == 'Glimp')
        return {text: 'Android aplikacija koja se spaja na MiaoMiao/Blucon odašiljače i očitava Libre senzore naslanjanjem.', 
                advs : ['Lagana instalacija - sa Google Play', 'Jednostavna konfiguracija', 'Stabilna', 'Radi i na Android satovima', 'Alarmi'],
                disadvs : ['Kalibracije znaju učiniti podatke nepreciznima'], 
                img : 'img/glimp.png'};
    else if (this.kind == 'Nightscout')
        return {text: 'Web aplikacija i baza podataka. Proizveli je roditelji kako bi mogli pratiti glikemije svoje djece.', 
                advs : ['Dostupnost podataka','Podrška zajednice', 'Izvještaji'], 
                disadvs : ['Komplicirana instalacija','Alarmi sviraju samo kada je web stranica otvorena'], 
                img : 'img/ns.png'};
    else if (this.kind == 'NightGuard')
        return {text: 'IOS aplikacija koja podatke sa Nightscouta prikazuje i alarmira.', 
                advs : ['Alarmi','Jednostavnost','Radi i na Apple Watchu'], 
                disadvs : ['Ne može raditi u pozadini - mora biti otvorena'], 
                img : 'img/nightguard.png'};
    else if (this.kind == 'Tomato')
        return {text: 'Službena aplikacija proizvođača MiaoMiao.', 
                advs : ['Jednostavno korištenje','Jednostavna instalacija'], 
                disadvs : ['Aplikacija zaostaje kvalitetom','Manje pouzdana'], 
                img : 'img/tomato.WebP'};
    else if (this.kind == 'LinkBluCon')
        return {text: 'Službena aplikacija proizvođača Blucon Nightrider, za primanje podataka sa njega.', 
                advs : ['Jednostavno korištenje','Jednostavna instalacija'], 
                disadvs : ['Aplikacija zaostaje kvalitetom','Manje pouzdana'], 
                img : 'img/LinkBluCon.Webp'};
    else if (this.kind == 'FollowBluCon')
        return {text: 'Službena aplikacija proizvođača Blucon Nightrider, za praćenje podataka sakupljenih LinkBluCon aplikacijom.', 
                advs : ['Jednostavno korištenje','Moguće praćenje više korisnika'], 
                disadvs : ['Aplikacija zaostaje kvalitetom'], 
                img : 'img/FollowBluCon.WebP'};
    else if (this.kind == 'Direktno')
        return {text: 'Komunikacija se zbiva internetom, ali se podaci tamo ne spremaju.', 
                advs : ['Jedna kompnenta manje','Brz prijenos podataka'], 
                disadvs : ['nema'], 
                img : 'img/matrix.jpg'};
    else if (this.kind == 'Spike')
        return {text: 'IOS aplikacija, sposobna primati podatke s mnogih tipova CGM senzora i MiaoMiao/Blucon odašiljača. Može i prikazivati podatke sakupljene od drugih aplikacija.', 
                advs : ['Puna funkcionalnosti','Alarmi'], 
                disadvs : ['Vrlo komplicirana instalacija','Potrebna periodička reinstalacija aplikacije'], 
                img : 'img/spike.png'};
    else if (this.kind == 'DropBox')
        return {text: 'Spremište podataka na internetu, kojeg Glimp može upotrebljavati za razmjenu informacija.', 
                advs : ['Laka konfiguracija','Omogućuje i otvaranje podataka na GlimpForWeb aplikaciji'], 
                disadvs : ['Rudimentarno','Potrebno otvoriti račun'], 
                img : 'img/dropbox.jpg'};
    else if (this.kind == '-')
        return {text: 'U ovoj konfiguraciji ovakve komponente nema.', 
                advs : ['Jedna kompnenta manje'], 
                disadvs : ['-'], 
                img : 'img/tumble.gif'};
    else if (this.kind == 'Serveri proizvođača')
        return {text: 'Spremište podataka pod kontrolom proizvođača softvera koji razmjenjuje podatke.', 
                advs : ['Nema konfiguracija i instalacija'], 
                disadvs : ['Privatnost podataka'], 
                img : 'img/servers.jpg'};

    else
        return {text: 'Nepoznata komponenta', 
                advs : ['-'], 
                disadvs : ['-'],
                img : 'img/travolta.gif'};
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