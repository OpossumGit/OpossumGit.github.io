Vue.component('comp', {
  props: ['kind'],
  computed: {
    desc : function () {
    if (this.kind == 'xdrip')
        return {
                advs : ['calibrations','functionalities', 'androidwatch','alarms','community', 'scan'], 
                disadvs : ['noplay','hardconf', 'btissues' ], 
                img : 'img/xdrip.jpg'};
    else if (this.kind == 'glimp')
        return {
                advs : ['easyinstall', 'easyconf', 'stable', 'androidwatch', 'alarms','scan'],
                disadvs : ['calibration'], 
                img : 'img/glimp.png'};
    else if (this.kind == 'nightscout')
        return {
                advs : ['dataavailability','community', 'reports'], 
                disadvs : ['hardinstall','noback'], 
                img : 'img/ns.png'};
    else if (this.kind == 'nightguard')
        return {
                advs : ['alarms','simple','applewatch'], 
                disadvs : ['noback'], 
                img : 'img/nightguard.png'};
    else if (this.kind == 'tomato')
        return {
                advs : ['simple','install'], 
                disadvs : ['lowquality','unreliable'], 
                img : 'img/tomato.png'};
    else if (this.kind == 'linkblucon')
        return {
                advs : ['simple', 'install'], 
                disadvs : ['lowquality','unreliable'], 
                img : 'img/LinkBluCon.png'};
    else if (this.kind == 'followblucon')
        return {
                advs : ['simple','multifollow'], 
                disadvs : ['lowquality'], 
                img : 'img/FollowBluCon.png'};
    else if (this.kind == 'direct')
        return {
                advs : ['nocomp','speed'], 
                disadvs : ['none'], 
                img : 'img/matrix.jpg'};
    else if (this.kind == 'spike')
        return {
                advs : ['functionalities','alarms','applewatch'], 
                disadvs : ['hardinstall','reinstall'], 
                img : 'img/spike.png'};
    else if (this.kind == 'dropbox')
        return { 
                advs : ['easyconf','glimpforweb'], 
                disadvs : ['Rudimentarno','needaccount'], 
                img : 'img/dropbox.jpg'};
    else if (this.kind == 'none')
        return { 
                advs : ['nocomp'], 
                disadvs : ['none'], 
                img : 'img/tumble.gif'};
    else if (this.kind == 'cloud')
        return { 
                advs : ['noconf'], 
                disadvs : ['privacy'], 
                img : 'img/servers.jpg'};

    else
        return {
                advs : ['empty'], 
                disadvs : ['none'],
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
  >{{$t("global."+kind)}}</v-card-title>
</v-img>

    <v-card-text>{{ $t("global.text"+kind) }}
    </v-card-text>
    
    <v-list dense>
        <v-subheader>{{ $t("global.advantages") }}</v-subheader>
        
            <v-list-item v-for="adv in desc.advs" class="green">
            {{$t("global.adv"+adv)}}
            </v-list-item>
    </v-list>
    
       <v-list dense>
        <v-subheader>{{ $t("global.disadvantages") }}</v-subheader>
        
            <v-list-item v-for="disadv in desc.disadvs"  class="red">
            {{$t("global.disadv"+disadv)}}
            </v-list-item>
    </v-list>
</v-card>
`
})