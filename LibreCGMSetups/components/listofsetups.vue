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
    }
  },
  computed: {
    setups: function() { 
      if (this.device==0 && this.master==0 && this.follower==1 && this.usecloud==0){
        return [
           {id: '1-1', left: 'xdrip', center: 'nightscout', right: 'none'},
           {id: '1-2', left: 'glimp', center: 'nightscout', right: 'none'},
           {id: '1-3', left: 'tomato', center: 'cloud', right: 'none'},
        ]
    }
    else if (this.device==0 && this.master==0 && this.follower==1 && this.usecloud==1) {
        return [
           {id: '2-1', left: 'xdrip', center: 'none', right: 'none'},
           {id: '2-2', left: 'glimp', center: 'none', right: 'none'}
        ]
      }
    else if (this.device==0 && this.master==0 && this.follower==0 && this.usecloud==0) {
        return [
           {id: '3-1', left: 'xdrip', center: 'nightscout', right: 'xdrip'},
           {id: '3-2', left: 'glimp', center: 'nightscout', right: 'xdrip'},
           {id: '3-3', left: 'glimp', center: 'dropbox', right: 'glimp'},
           {id: '3-4', left: 'tomato', center: 'nightscout', right: 'xdrip'},
           {id: '3-5', left: 'xdrip', center: 'direct', right: 'xdrip'}
        ]
      }
    else if (this.device==0 && this.master==0 && this.follower==0 && this.usecloud==1) {
        return [
           {id: '4-1', left: 'xdrip', center: 'direct', right: 'xdrip'}
        ]
      }
    else if (this.device==0 && this.master==0 && this.follower==2 && this.usecloud==0) {
        return [
           {id: '5-1', left: 'xdrip', center: 'nightscout', right: 'nightguard'},
           {id: '5-2', left: 'glimp', center: 'nightscout', right: 'nightguard'},
           {id: '5-3', left: 'xdrip', center: 'nightscout', right: 'spike'},
           {id: '5-4', left: 'glimp', center: 'nightscout', right: 'spike'},
           {id: '5-5', left: 'tomato', center: 'nightscout', right: 'nightguard'},
           {id: '5-6', left: 'tomato', center: 'nightscout', right: 'spike'}
        ]
      }
    else if (this.device==0 && this.master==0 && this.follower==2 && this.usecloud==1) {
        return [
           {id: '6-1', left: 'impossible', center: 'impossible', right: 'impossible'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==1 && this.usecloud==0){
        return [
           {id: '7-1', left: 'spike', center: 'nightscout', right: 'none'},
           {id: '7-2', left: 'tomato', center: 'cloud', right: 'none'},
           {id: '7-3', left: 'tomato', center: 'nightscout', right: 'none'}
        ]
    }
    else if (this.device==0 && this.master==1 && this.follower==1 && this.usecloud==1) {
        return [
           {id: '8-1', left: 'spike', center: 'none', right: 'none'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==0 && this.usecloud==0) {
        return [
           {id: '9-1', left: 'spike', center: 'nightscout', right: 'xdrip'},
           {id: '9-2', left: 'tomato', center: 'nightscout', right: 'xdrip'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==0 && this.usecloud==1) {
        return [
           {id: '10-1', left: 'impossible', center: 'impossible', right: 'impossible'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==2 && this.usecloud==0) {
        return [
           {id: '11-1', left: 'spike', center: 'nightscout', right: 'spike'},
           {id: '11-2', left: 'spike', center: 'nightscout', right: 'nightguard'},
           {id: '11-3', left: 'tomato', center: 'nightscout', right: 'nightguard'},
           {id: '11-4', left: 'tomato', center: 'nightscout', right: 'spike'}
        ]
      }
    else if (this.device==0 && this.master==1 && this.follower==2 && this.usecloud==1) {
        return [
           {id: '12-1', left: 'impossible', center: 'impossible', right: 'impossible'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==1 && this.usecloud==0){
        return [
           {id: '13-1', left: 'xdrip', center: 'nightscout', right: 'none'},
           {id: '13-2', left: 'glimp', center: 'nightscout', right: 'none'},
           {id: '13-3', left: 'linkblucon', center: 'cloud', right: 'none'},
        ]
    }
    else if (this.device==1 && this.master==0 && this.follower==1 && this.usecloud==1) {
        return [
           {id: '14-1', left: 'xdrip', center: 'none', right: 'none'},
           {id: '14-2', left: 'glimp', center: 'none', right: 'none'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==0 && this.usecloud==0) {
        return [
           {id: '15-1', left: 'xdrip', center: 'nightscout', right: 'xdrip'},
           {id: '15-2', left: 'glimp', center: 'nightscout', right: 'xdrip'},
           {id: '15-3', left: 'glimp', center: 'dropbox', right: 'glimp'},
           {id: '15-4', left: 'linkblucon', center: 'cloud', right: 'followblucon'},
           {id: '15-5', left: 'xdrip', center: 'direct', right: 'xdrip'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==0 && this.usecloud==1) {
        return [
           {id: '16-1', left: 'xdrip', center: 'direct', right: 'xdrip'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==2 && this.usecloud==0) {
        return [
           {id: '17-1', left: 'xdrip', center: 'nightscout', right: 'nightguard'},
           {id: '17-2', left: 'glimp', center: 'nightscout', right: 'nightguard'},
           {id: '17-3', left: 'xdrip', center: 'nightscout', right: 'spike'},
           {id: '17-4', left: 'glimp', center: 'nightscout', right: 'spike'},
           {id: '17-5', left: 'linkblucon', center: 'cloud', right: 'followblucon'}
        ]
      }
    else if (this.device==1 && this.master==0 && this.follower==2 && this.usecloud==1) {
        return [
           {id: '18-1', left: 'impossible', center: 'impossible', right: 'impossible'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==1 && this.usecloud==0){
        return [
           {id: '19-1', left: 'spike', center: 'nightscout', right: 'none'},
           {id: '19-2', left: 'linkblucon', center: 'cloud', right: 'none'}
        ]
    }
    else if (this.device==1 && this.master==1 && this.follower==1 && this.usecloud==1) {
        return [
           {id: '20-1', left: 'spike', center: 'none', right: 'none'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==0 && this.usecloud==0) {
        return [
           {id: '21-1', left: 'spike', center: 'nightscout', right: 'xdrip'},
           {id: '21-2', left: 'linkblucon', center: 'cloud', right: 'followblucon'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==0 && this.usecloud==1) {
        return [
           {id: '22-1', left: 'impossible', center: 'impossible', right: 'impossible'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==2 && this.usecloud==0) {
        return [
           {id: '23-1', left: 'spike', center: 'nightscout', right: 'spike'},
           {id: '23-2', left: 'spike', center: 'nightscout', right: 'nightguard'},
           {id: '23-3', left: 'linkblucon', center: 'cloud', right: 'followblucon'}
        ]
      }
    else if (this.device==1 && this.master==1 && this.follower==2 && this.usecloud==1) {
        return [
           {id: '24-1', left: 'impossible', center: 'impossible', right: 'impossible'}
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
       {{ $t("global.configuration") }} {{ index +1}} 
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
            <p class="subtitle-2">{{ $t("global.collection_application") }}: {{ $t("global."+ setup.left) }}</p>
          <comp :kind="setup.left"></comp>
        </v-col>
          <v-col cols="12" sm="4">
              <p class="subtitle-2">{{ $t("global.transfer_application") }}: {{ $t("global."+ setup.center)}} </p>
          <comp :kind="setup.center"></comp>
        </v-col>
          <v-col cols="12" sm="4">
              <p class="subtitle-2">{{ $t("global.receiver_application") }}: {{$t("global."+ setup.right)}}</p>
          <comp :kind="setup.right"></comp>
        </v-col>
      </v-row>
    </v-container>
          
        </v-tab-item>
    </v-tabs-items>
   
    
</div>
`
})