Vue.component('parameters', {
   data: () => ({
  	devices: ['MiaoMiao','BluCon'],
    masters: ['Android','iPhone'],
    followers: ['Android','∅','iPhone'],
    useClouds: ['✓','×'],
    device: 0, 
    master: 0,
    follower: 0,
    usecloud: 0
  	}),
  template: `

    <v-row>
        <v-col cols="12"  sm="6" lg="3">
        
        <v-card dark>
        <v-subheader>{{ $t("global.device") }}</v-subheader>
        <v-card-text>
            <v-slider
            :tick-labels="devices"
            max="1"
            step="1"
            ticks="always"
            tick-size="4"
            v-model="device"
            @change="$emit('emit-device', device)"
            append-icon="panorama_fish_eye"
            prepend-icon="toll"
            @click:append="device = 1;$emit('emit-device', device)"
            @click:prepend="device = 0;$emit('emit-device', device)"
            ></v-slider>
        </v-card-text>
            </v-card>
         </v-col>
             <v-col cols="12"  sm="6" lg="3">
        <v-card dark>
        <v-subheader>{{ $t("global.master") }}</v-subheader>
        <v-card-text>
            <v-slider
            :tick-labels="masters"
            max="1"
            step="1"
            ticks="always"
            tick-size="4"
            v-model="master"
            v-on:change="$emit('emit-master', master)"
            append-icon="phone_iphone"
            prepend-icon="android"
            @click:append="master = 1;$emit('emit-master', master)"
            @click:prepend="master = 0;$emit('emit-master', master)"
            ></v-slider>
        </v-card-text>
        </v-card>
         </v-col>
            <v-col cols="12"  sm="6" lg="3">
            <v-card dark>
        <v-subheader>{{ $t("global.follower") }}</v-subheader>
        <v-card-text>
            <v-slider
            :tick-labels="followers"
            max="2"
            step="1"
            ticks="always"
            tick-size="4"
            v-model="follower"
            v-on:change="$emit('emit-follower', follower)"
            append-icon="phone_iphone"
            prepend-icon="android"
            @click:append="follower = 2;$emit('emit-follower', follower)"
            @click:prepend="follower = 0;$emit('emit-follower', follower)"
            ></v-slider>
        </v-card-text>
        </v-card>
        </v-col>
             <v-col cols="12"  sm="6" lg="3">
                <v-card dark>
        <v-subheader>{{ $t("global.usecloud") }}</v-subheader>
        <v-card-text>
            <v-slider
            :tick-labels="useClouds"
            max="1"
            step="1"
            ticks="always"
            tick-size="4"
            v-model="usecloud"
            v-on:change="$emit('emit-usecloud', usecloud)"
            append-icon="cloud_off"
            prepend-icon="cloud"
            @click:append="usecloud = 1;$emit('emit-usecloud', usecloud)"
            @click:prepend="usecloud = 0;$emit('emit-usecloud', usecloud)"
            ></v-slider>
        </v-card-text>
        </v-card>
        </v-col>
</v-row>
    `
})