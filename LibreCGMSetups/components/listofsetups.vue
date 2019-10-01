Vue.component('listofsetups', {
  props: ['device', 'master', 'follower', 'usecloud'],
  data: () => ({
  	tab: null
  	}),
  watch : {
    device: function(val) {
      this.tab = 0;
    },
    master: function(val) {
      this.tab = 0;
    },
    follower: function(val) {
      this.tab = 0;
    },
    usecloud: function(val) {
      this.tab = 0;
    },
    tab: function(val){ console.log(val)}
  },
  computed: {
    setups: function() { 
      if (this.device==0 && this.master==0 && this.follower==1 && this.usecloud==0){
        return [
           {id: '1-1', left: 'Xdrip+', center: 'Nightscout', right: '-'},
           {id: '1-2', left: 'Glimp', center: 'Nightscout', right: '-'},
           {id: '1-3', left: 'Tomato', center: 'Serveri proizvođača', right: '-'},
        ]
    }
    else if (this.device==0 && this.master==0 && this.follower==1 && this.usecloud==1) {
        return [
           {id: '2-1', left: 'Xdrip+', center: '-', right: '-'},
           {id: '2-2', left: 'Glimp', center: '-', right: '-'}
        ]
      }
    else if (this.device==0 && this.master==0 && this.follower==0 && this.usecloud==0) {
        return [
           {id: '3-1', left: 'Xdrip+', center: 'Nightscout', right: 'Xdrip+'},
           {id: '3-2', left: 'Glimp', center: 'Nightscout', right: 'Xdrip+'},
           {id: '3-3', left: 'Glimp', center: 'DropBox', right: 'Glimp'},
           {id: '3-4', left: 'Tomato', center: 'Nightscout', right: 'Xdrip+'},
           {id: '3-5', left: 'Xdrip+', center: 'Direktno', right: 'Xdrip+'}
        ]
      }
    else if (this.device==0 && this.master==0 && this.follower==0 && this.usecloud==1) {
        return [
           {id: '4-1', left: 'Xdrip+', center: 'Direktno', right: 'Xdrip+'}
        ]
      }
    else if (this.device==0 && this.master==0 && this.follower==2 && this.usecloud==0) {
        return [
           {id: '5-1', left: 'Xdrip+', center: 'Nightscout', right: 'NightGuard'},
           {id: '5-2', left: 'Glimp', center: 'Nightscout', right: 'NightGuard'},
           {id: '5-3', left: 'Xdrip+', center: 'Nightscout', right: 'Spike'},
           {id: '5-4', left: 'Glimp', center: 'Nightscout', right: 'Spike'},
           {id: '5-5', left: 'Tomato', center: 'Nightscout', right: 'NightGuard'},
           {id: '5-6', left: 'Tomato', center: 'Nightscout', right: 'Spike'}
        ]
      }
    else if (this.device==0 && this.master==0 && this.follower==2 && this.usecloud==1) {
        return [
           {id: '6-1', left: 'Nemoguće', center: 'Nemoguće', right: 'Nemoguće'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==1 && this.usecloud==0){
        return [
           {id: '7-1', left: 'Spike', center: 'Nightscout', right: '-'},
           {id: '7-2', left: 'Tomato', center: 'Serveri proizvođača', right: '-'},
           {id: '7-3', left: 'Tomato', center: 'Nightscout', right: '-'}
        ]
    }
    else if (this.device==0 && this.master==1 && this.follower==1 && this.usecloud==1) {
        return [
           {id: '8-1', left: 'Spike', center: '-', right: '-'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==0 && this.usecloud==0) {
        return [
           {id: '9-1', left: 'Spike', center: 'Nightscout', right: 'Xdrip+'},
           {id: '9-2', left: 'Tomato', center: 'Nightscout', right: 'Xdrip+'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==0 && this.usecloud==1) {
        return [
           {id: '10-1', left: 'Nemoguće', center: 'Nemoguće', right: 'Nemoguće'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==2 && this.usecloud==0) {
        return [
           {id: '11-1', left: 'Spike', center: 'Nightscout', right: 'Spike'},
           {id: '11-2', left: 'Spike', center: 'Nightscout', right: 'NightGuard'},
           {id: '11-3', left: 'Tomato', center: 'Nightscout', right: 'NightGuard'},
           {id: '11-4', left: 'Tomato', center: 'Nightscout', right: 'Spike'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==2 && this.usecloud==1) {
        return [
           {id: '12-1', left: 'Nemoguće', center: 'Nemoguće', right: 'Nemoguće'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==1 && this.usecloud==0){
        return [
           {id: '13-1', left: 'Xdrip+', center: 'Nightscout', right: '-'},
           {id: '13-2', left: 'Glimp', center: 'Nightscout', right: '-'},
           {id: '13-3', left: 'LinkBluCon', center: 'Serveri proizvođača', right: '-'},
        ]
    }
    else if (this.device==1 && this.master==0 && this.follower==1 && this.usecloud==1) {
        return [
           {id: '14-1', left: 'Xdrip+', center: '-', right: '-'},
           {id: '14-2', left: 'Glimp', center: '-', right: '-'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==0 && this.usecloud==0) {
        return [
           {id: '15-1', left: 'Xdrip+', center: 'Nightscout', right: 'Xdrip+'},
           {id: '15-2', left: 'Glimp', center: 'Nightscout', right: 'Xdrip+'},
           {id: '15-3', left: 'Glimp', center: 'DropBox', right: 'Glimp'},
           {id: '15-4', left: 'LinkBluCon', center: 'Serveri proizvođača', right: 'FollowBluCon'},
           {id: '15-5', left: 'Xdrip+', center: 'Direktno', right: 'Xdrip+'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==0 && this.usecloud==1) {
        return [
           {id: '16-1', left: 'Xdrip+', center: 'Direktno', right: 'Xdrip+'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==2 && this.usecloud==0) {
        return [
           {id: '17-1', left: 'Xdrip+', center: 'Nightscout', right: 'NightGuard'},
           {id: '17-2', left: 'Glimp', center: 'Nightscout', right: 'NightGuard'},
           {id: '17-3', left: 'Xdrip+', center: 'Nightscout', right: 'Spike'},
           {id: '17-4', left: 'Glimp', center: 'Nightscout', right: 'Spike'},
           {id: '17-5', left: 'LinkBluCon', center: 'Serveri proizvođača', right: 'FollowBluCon'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==2 && this.usecloud==1) {
        return [
           {id: '18-1', left: 'Nemoguće', center: 'Nemoguće', right: 'Nemoguće'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==1 && this.usecloud==0){
        return [
           {id: '19-1', left: 'Spike', center: 'Nightscout', right: '-'},
           {id: '19-2', left: 'LinkBluCon', center: 'Serveri proizvođača', right: '-'}
        ]
    }
    else if (this.device==1 && this.master==1 && this.follower==1 && this.usecloud==1) {
        return [
           {id: '20-1', left: 'Spike', center: '-', right: '-'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==0 && this.usecloud==0) {
        return [
           {id: '21-1', left: 'Spike', center: 'Nightscout', right: 'Xdrip+'},
           {id: '21-2', left: 'LinkBluCon', center: 'Serveri proizvođača', right: 'FollowBluCon'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==0 && this.usecloud==1) {
        return [
           {id: '22-1', left: 'Nemoguće', center: 'Nemoguće', right: 'Nemoguće'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==2 && this.usecloud==0) {
        return [
           {id: '23-1', left: 'Spike', center: 'Nightscout', right: 'Spike'},
           {id: '23-2', left: 'Spike', center: 'Nightscout', right: 'NightGuard'},
           {id: '23-3', left: 'LinkBluCon', center: 'Serveri proizvođača', right: 'FollowBluCon'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==2 && this.usecloud==1) {
        return [
           {id: '24-1', left: 'Nemoguće', center: 'Nemoguće', right: 'Nemoguće'}
        ]
      }
 
    }
  },
  template: `
<div>
       <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
               
    >
      <v-tab
        v-for="(setup,index) in setups"
        :key="setup.id"
             
      >
       Konfiguracija {{ index +1}} 
      </v-tab>
    </v-tabs>
    
    
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="setup in setups"
        :key="setup.id"
      >
     <v-container class="pa-2" fluid>
      <v-row>
        <v-col cols="12"  sm="4">
            <p class="subtitle-2">Aplikacija za prikupljanje podataka: {{ setup.left}}</p>
          <comp :kind="setup.left"></comp>
        </v-col>
          <v-col cols="12" sm="4">
              <p class="subtitle-2">Podaci se prenose preko: {{ setup.center}} </p>
          <comp :kind="setup.center"></comp>
        </v-col>
          <v-col cols="12" sm="4">
              <p class="subtitle-2">Aplikacija za udaljeno čitanje podataka: {{setup.right}}</p>
          <comp :kind="setup.right"></comp>
        </v-col>
      </v-row>
    </v-container>
          
        </v-tab-item>
    </v-tabs-items>
   
    
</div>
`
})